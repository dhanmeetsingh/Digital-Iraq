import React from 'react';

const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.7) % 100}%`,
  size: 4 + (i % 5) * 6,
  duration: 14 + (i % 8) * 2,
  delay: -(i * 1.3),
  opacity: 0.06 + (i % 4) * 0.03,
}));

export function AnimatedBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,          /* ALWAYS behind everything */
        overflow: 'hidden',
        backgroundColor: '#000',
        isolation: 'isolate', /* creates new stacking context — nothing escapes */
      }}
    >
      {/* Orb 1 */}
      <div style={{
        position: 'absolute', top: '-8rem', left: '-8rem',
        width: '800px', height: '800px', borderRadius: '50%',
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(37,99,235,0.2) 50%, transparent 70%)',
        animation: 'orbFloat1 30s ease-in-out infinite',
      }} />

      {/* Orb 2 */}
      <div style={{
        position: 'absolute', top: '25%', right: '-8rem',
        width: '900px', height: '900px', borderRadius: '50%',
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0.2) 50%, transparent 70%)',
        animation: 'orbFloat2 35s ease-in-out infinite',
      }} />

      {/* Orb 3 */}
      <div style={{
        position: 'absolute', bottom: 0, left: '25%',
        width: '850px', height: '850px', borderRadius: '50%',
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(219,39,119,0.25) 0%, rgba(126,34,206,0.2) 50%, transparent 70%)',
        animation: 'orbFloat3 40s ease-in-out infinite',
      }} />

      {/* Orb 4 */}
      <div style={{
        position: 'absolute', top: '50%', left: '33%',
        width: '700px', height: '700px', borderRadius: '50%',
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(13,148,136,0.15) 50%, transparent 70%)',
        animation: 'orbFloat4 32s ease-in-out infinite',
      }} />

      {/* Orb 5 */}
      <div style={{
        position: 'absolute', top: 0, right: '25%',
        width: '750px', height: '750px', borderRadius: '50%',
        filter: 'blur(80px)',
        background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(217,119,6,0.15) 50%, transparent 70%)',
        animation: 'orbFloat5 38s ease-in-out infinite',
      }} />

      {/* Bubbles */}
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            left: b.left,
            bottom: '-60px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: '50%',
            border: `1px solid rgba(6,182,212,${b.opacity * 2})`,
            background: `radial-gradient(circle at 35% 35%, rgba(6,182,212,${b.opacity}), transparent 70%)`,
            animation: `bubbleRise ${b.duration}s ease-in infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* Corner glows — static */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle at 0% 0%, rgba(6,182,212,0.15), transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle at 100% 100%, rgba(147,51,234,0.15), transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(120px, -100px) scale(1.4); }
          66%       { transform: translate(-60px, 80px) scale(1.2); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-130px, 120px) scale(1.5); }
          66%       { transform: translate(100px, -90px) scale(1.3); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(80px, -130px) scale(1.6); }
          66%       { transform: translate(-120px, 100px) scale(1.2); }
        }
        @keyframes orbFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-100px, 110px) scale(1.4); }
          66%       { transform: translate(130px, -80px) scale(1.5); }
        }
        @keyframes orbFloat5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(70px, -90px) scale(1.4); }
          66%       { transform: translate(-100px, 70px) scale(1.2); }
        }
        @keyframes bubbleRise {
          0%   { transform: translateY(0) scale(1);     opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-105vh) scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}