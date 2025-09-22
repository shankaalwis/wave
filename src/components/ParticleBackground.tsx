import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random horizontal position
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration between 10-20s
      const duration = Math.random() * 10 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), Math.random() * 5000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
      // Clean up particles
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="particles" aria-hidden="true" />;
};