'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; radius: number; opacity: number; drift: number };

export default function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 767px)');
    let particles: Particle[] = [];
    let animationFrame = 0;
    let lastFrame = 0;
    let width = 0;
    let height = 0;

    const draw = (time = 0) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        context.beginPath();
        context.fillStyle = `rgba(245, 241, 234, ${particle.opacity})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
      if (!reducedMotion.matches) {
        if (time - lastFrame > 32) {
          particles.forEach((particle) => {
            particle.y -= particle.drift;
            particle.x += Math.sin(time / 7000 + particle.y) * 0.025;
            if (particle.y < -8) {
              particle.y = height + 8;
              particle.x = Math.random() * width;
            }
          });
          lastFrame = time;
        }
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const count = mobile.matches ? 20 : 44;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.15 + 0.25,
        opacity: Math.random() * 0.17 + 0.025, drift: Math.random() * 0.11 + 0.025,
      }));
      cancelAnimationFrame(animationFrame);
      draw();
    };

    resize();
    window.addEventListener('resize', resize);
    reducedMotion.addEventListener('change', resize);
    mobile.addEventListener('change', resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      reducedMotion.removeEventListener('change', resize);
      mobile.removeEventListener('change', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-70" />;
}
