import React, { useEffect, useRef } from 'react';
import { AsciiAnimation } from '../utils/asciiAnimation';

const AsciiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<AsciiAnimation | null>(null);
  const isMobile = useRef<boolean>(window.innerWidth <= 768);
  const lastWidth = useRef<number>(window.innerWidth);
  const lastHeight = useRef<number>(window.innerHeight);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize animation with mobile optimization
    animationRef.current = new AsciiAnimation(canvasRef.current, isMobile.current);
    animationRef.current.start();

    // Handle resize with debounce and size check
    let resizeTimeout: number;
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      const isMobileChanged = newIsMobile !== isMobile.current;
      const dimensionsChanged = window.innerWidth !== lastWidth.current || window.innerHeight !== lastHeight.current;

      if (dimensionsChanged || isMobileChanged) {
        lastWidth.current = window.innerWidth;
        lastHeight.current = window.innerHeight;
        isMobile.current = newIsMobile;
        
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
          if (animationRef.current) {
            animationRef.current.stop();
            animationRef.current = new AsciiAnimation(canvasRef.current!, isMobile.current);
            animationRef.current.start();
          }
        }, 250);
      }
    };

    // Only listen for actual window resizes, not scroll events
    let ticking = false;
    const onResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleResize();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
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
      style={{ 
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default AsciiBackground; 