'use client';

import { CSSProperties, useEffect, useMemo, useRef } from 'react';

type DepthTextProps = {
  text: string; layers?: number; depth?: number; faceColor?: string; depthColor?: string; tilt?: number;
  pointerTracking?: boolean; smoothing?: number; perspective?: number; autoOrbit?: boolean; orbitSpeed?: number;
  fontSize?: string; fontWeight?: number; shadow?: boolean;
};

export default function DepthText({ text, layers = 24, depth = 2, faceColor = '#F5F1EA', depthColor = '#E85D5D', tilt = 6, pointerTracking = true, smoothing = 0.14, perspective = 900, autoOrbit = true, orbitSpeed = 0.35, fontSize = 'clamp(3rem, 12vw, 7rem)', fontWeight = 900, shadow = true }: DepthTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const values = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, frame: 0 });
  const layerIndexes = useMemo(() => Array.from({ length: layers }, (_, index) => index), [layers]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !pointerTracking) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const render = () => {
      const state = values.current;
      state.x += (state.targetX - state.x) * smoothing;
      state.y += (state.targetY - state.y) * smoothing;
      element.style.setProperty('--depth-rotate-x', `${state.y * tilt}deg`);
      element.style.setProperty('--depth-rotate-y', `${state.x * tilt}deg`);
      state.frame = requestAnimationFrame(render);
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || reducedMotion.matches) return;
      const bounds = element.getBoundingClientRect();
      values.current.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      values.current.targetY = -((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const reset = () => { values.current.targetX = 0; values.current.targetY = 0; };
    if (media.matches && !reducedMotion.matches) {
      element.addEventListener('pointermove', move);
      element.addEventListener('pointerleave', reset);
      values.current.frame = requestAnimationFrame(render);
    }
    return () => { cancelAnimationFrame(values.current.frame); element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset); };
  }, [pointerTracking, smoothing, tilt]);

  const style = { '--depth-face': faceColor, '--depth-color': depthColor, '--depth-size': fontSize, '--depth-weight': fontWeight, '--depth-perspective': `${perspective}px`, '--orbit-duration': `${Math.max(8, 30 / Math.max(orbitSpeed, 0.1))}s` } as CSSProperties;
  return <div ref={elementRef} className={`depth-text ${autoOrbit ? 'depth-text--orbit' : ''} ${shadow ? 'depth-text--shadow' : ''}`} style={style} aria-label={text}>
    <div className="depth-text__stage" aria-hidden="true">
      {layerIndexes.map((index) => <span key={index} className="depth-text__layer" style={{ transform: `translate3d(${-index * depth}px, ${index * depth}px, ${-index}px)` }}>{text}</span>)}
      <span className="depth-text__face">{text}</span>
    </div>
  </div>;
}
