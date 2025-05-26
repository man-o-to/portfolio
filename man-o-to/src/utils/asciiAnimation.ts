import { lerp, clamp } from './math';
import { getLogoBounds, getLogoChar } from './asciiArt';

// ASCII characters from darkest to lightest
const ASCII_CHARS = ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

export class AsciiAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private startTime: number = 0;
  private lastFrameTime: number = 0;
  private animationFrameId: number = 0;
  private logoStartCol: number = 0;
  private logoStartRow: number = 0;
  private logoTransitionStart: number = 0;
  private logoTransitionDuration: number = 2000; // 2 seconds transition
  private backgroundRevealDuration: number = 3000; // 3 seconds for background reveal
  private backgroundFillDuration: number = 2000; // 2 seconds to fill remaining space

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get canvas context');
    this.ctx = context;
    this.resize();
  }

  private resize() {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
    
    // Calculate logo position (centered)
    const { width: logoWidth, height: logoHeight } = getLogoBounds();
    const charWidth = 12;
    const charHeight = 20;
    const cols = Math.floor(width / charWidth);
    const rows = Math.floor(height / charHeight);
    
    // Ensure perfect centering by rounding to nearest pixel
    this.logoStartCol = Math.round((cols - logoWidth) / 2);
    this.logoStartRow = Math.round((rows - logoHeight) / 2);
  }

  private getAsciiChar(brightness: number): string {
    const index = Math.floor(lerp(0, ASCII_CHARS.length - 1, brightness));
    return ASCII_CHARS[clamp(index, 0, ASCII_CHARS.length - 1)];
  }

  private getSpiralProgress(x: number, y: number, elapsed: number): number {
    // Convert coordinates to polar with precise centering
    const centerX = Math.round(this.canvas.width / 2);
    const centerY = Math.round(this.canvas.height / 2);
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Calculate maximum possible distance from center
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    
    // Calculate spiral progress (0 to 1)
    const spiralProgress = (distance / maxDistance) * 1.5;
    
    // Calculate time progress for both reveal and fill phases
    const revealProgress = Math.min(elapsed / this.backgroundRevealDuration, 1);
    const fillProgress = Math.max(0, Math.min(1, (elapsed - this.backgroundRevealDuration) / this.backgroundFillDuration));
    
    // Combine both phases
    const timeProgress = revealProgress + fillProgress;
    
    // Reveal based on spiral distance and time, with fill phase
    return Math.max(0, Math.min(1, timeProgress - spiralProgress));
  }

  private drawFrame(timestamp: number) {
    if (!this.startTime) this.startTime = timestamp;
    if (!this.lastFrameTime) this.lastFrameTime = timestamp;
    if (!this.logoTransitionStart) this.logoTransitionStart = timestamp;

    const elapsed = (timestamp - this.startTime) * 0.001; // Convert to seconds
    this.lastFrameTime = timestamp;

    // Calculate logo transition progress
    const logoProgress = Math.min(
      (timestamp - this.logoTransitionStart) / this.logoTransitionDuration,
      1
    );

    // Clear the canvas
    this.ctx.fillStyle = '#051533'; // navy blue bg
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculate grid size based on canvas dimensions
    const charWidth = 12;
    const charHeight = 20;
    const cols = Math.floor(this.canvas.width / charWidth);
    const rows = Math.floor(this.canvas.height / charHeight);

    // Set text properties for background
    this.ctx.font = `${charHeight * 0.6}px monospace`;

    // Draw ASCII characters
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Check if we're in the logo area
        const logoChar = getLogoChar(col, row, this.logoStartCol, this.logoStartRow, logoProgress);
        if (logoChar) {
          this.ctx.fillStyle = '#ffffff'; // White for logo
          this.ctx.font = `900 ${charHeight}px monospace`; // Increased font size and weight for logo
          this.ctx.fillText(logoChar, col * charWidth, row * charHeight);
          // Reset font for background
          this.ctx.font = `${charHeight * 0.6}px monospace`;
          continue;
        }

        // Calculate normalized coordinates (-1 to 1)
        const x = col * charWidth;
        const y = row * charHeight;
        
        // Get spiral reveal progress for this position
        const revealProgress = this.getSpiralProgress(x, y, elapsed * 1000);
        
        // Skip drawing if not yet revealed
        if (revealProgress <= 0) continue;

        // Calculate normalized coordinates for wave effect
        const nx = (col / cols) * 2 - 1;
        const ny = (row / rows) * 2 - 1;

        // Create multiple wave effects
        const distance = Math.sqrt(nx * nx + ny * ny);
        const wave1 = Math.sin(distance * 4 + elapsed * 0.8) * 0.5 + 0.5;
        const wave2 = Math.sin(nx * 3 + elapsed * 0.6) * 0.5 + 0.5;
        const wave3 = Math.cos(ny * 2 + elapsed * 0.4) * 0.5 + 0.5;
        
        // Combine waves with different weights
        const combinedWave = (wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3);
        
        // Add some noise
        const noise = Math.sin(nx * ny * 10 + elapsed * 1.2) * 0.1;
        
        // Calculate final brightness with more variation
        const brightness = clamp(
          (combinedWave + (1 - distance) * 0.5 + noise) * 0.8 * revealProgress,
          0,
          1
        );
        
        // Get ASCII character based on brightness
        const char = this.getAsciiChar(brightness);
        
        // Set color to light blue with fade-in
        this.ctx.fillStyle = `rgba(119, 155, 206, ${revealProgress})`;
        
        // Draw the character
        this.ctx.fillText(
          char,
          col * charWidth,
          row * charHeight
        );
      }
    }

    // Request next frame
    this.animationFrameId = requestAnimationFrame(this.drawFrame.bind(this));
  }

  public start() {
    this.animationFrameId = requestAnimationFrame(this.drawFrame.bind(this));
  }

  public stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
} 