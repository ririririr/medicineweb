import { useEffect, useRef } from 'react';

export const useScrollResistance = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let momentum = 0;
    let animationFrameId: number;
    let lastScrollTime = Date.now();

    const applyMomentum = () => {
      if (Math.abs(momentum) > 0.1) {
        window.scrollBy(0, momentum);
        momentum *= 0.92; // Gentler deceleration
        animationFrameId = requestAnimationFrame(applyMomentum);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = element.getBoundingClientRect();
      const phoneSection = document.querySelector('.phone-section');
      const phoneSectionRect = phoneSection?.getBoundingClientRect();
      
      if (!phoneSectionRect) return;

      const isOverlapping = phoneSectionRect.bottom > rect.top;
      
      if (isOverlapping) {
        e.preventDefault();
        
        const currentTime = Date.now();
        const timeDelta = currentTime - lastScrollTime;
        lastScrollTime = currentTime;

        const overlap = phoneSectionRect.bottom - rect.top;
        const maxOverlap = 300; // Increased overlap threshold
        const overlapFactor = Math.max(0.2, 1 - overlap / maxOverlap);
        
        const resistance = 12; // Increased resistance for smoother scrolling
        const newMomentum = (e.deltaY / resistance) * overlapFactor;
        
        momentum = momentum * 0.85 + newMomentum * 0.15; // Smoother momentum blending

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(applyMomentum);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return ref;
};