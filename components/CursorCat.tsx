'use client';

import React, { useEffect, useRef } from 'react';

export default function CursorCat() {
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const cat = catRef.current;
    if (!cat) return;

    let catPosX = 100;
    let catPosY = 100;
    let mousePosX = 100;
    let mousePosY = 100;
    let frameCount = 0;
    let idleCounter = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;

    const catSpeed = 10;

    // Sprite grid coordinates (X, Y in 32px increments)
    const spriteSets: Record<string, number[][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    function setSprite(name: string, frame: number) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      if (cat) {
        cat.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
      }
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      frameCount++;
      const dx = catPosX - mousePosX;
      const dy = catPosY - mousePosY;
      const distance = Math.hypot(dx, dy);

      // Mouse is close / still -> Transition to idle & sleeping
      if (distance < catSpeed || distance < 48) {
        idleCounter++;

        // 10 seconds stillness (100 ticks @ 100ms)
        if (idleCounter > 100 && idleAnimation === null) {
          idleAnimation = 'sleeping';
        }

        switch (idleAnimation) {
          case 'sleeping':
            if (idleAnimationFrame < 8) {
              setSprite('tired', 0);
              break;
            }
            setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
            if (idleAnimationFrame > 192) {
              resetIdleAnimation();
            }
            break;
          default:
            setSprite('idle', 0);
            return;
        }
        idleAnimationFrame++;
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;
      idleCounter = 0;

      let direction = '';
      if (dy / distance > 0.5) direction = 'N';
      else if (dy / distance < -0.5) direction = 'S';

      if (dx / distance > 0.5) direction += 'W';
      else if (dx / distance < -0.5) direction += 'E';

      if (direction in spriteSets) {
        setSprite(direction, frameCount);
      }

      catPosX -= (dx / distance) * catSpeed;
      catPosY -= (dy / distance) * catSpeed;

      catPosX = Math.min(Math.max(16, catPosX), window.innerWidth - 16);
      catPosY = Math.min(Math.max(16, catPosY), window.innerHeight - 16);

      if (cat) {
        cat.style.left = `${catPosX - 16}px`;
        cat.style.top = `${catPosY - 16}px`;
      }
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={catRef}
      aria-hidden="true"
      className="fixed pointer-events-none z-50 w-8 h-8 select-none"
      style={{
        backgroundImage: `url('/oneko.png')`,
        imageRendering: 'pixelated',
      }}
    />
  );
}