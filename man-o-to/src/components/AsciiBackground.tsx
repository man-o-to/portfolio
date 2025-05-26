import React, { useEffect, useRef } from 'react';
import { AsciiAnimation } from '../utils/asciiAnimation';

const AsciiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<AsciiAnimation | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize animation
    animationRef.current = new AsciiAnimation(canvasRef.current);
    animationRef.current.start();

    // Handle resize with debounce
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.stop();
          animationRef.current = new AsciiAnimation(canvasRef.current!);
          animationRef.current.start();
        }
      }, 250); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    />
  );
};

export default AsciiBackground; 