import React, { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas
 * High-performance 60 FPS Canvas background with twinkling stars,
 * subtle heritage gold & cyan celestial nodes, and mouse parallax.
 */
export default function StarfieldCanvas({ speedMultiplier = 1, interactive = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Star initialization
    const starCount = Math.min(Math.floor((width * height) / 4500), 280);
    let stars = [];

    const colors = [
      '#F5F8FC', // Crisp white
      '#F5F8FC',
      '#F5F8FC',
      '#D6A85F', // Heritage Gold
      '#8E6536', // Warm Bronze
      '#5BE0E5', // Soft celestial cyan
      '#98A5B8'  // Astronomical slate
    ];

    function initStars() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          pulseSpeed: (Math.random() * 0.02 + 0.005) * speedMultiplier,
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          layer: Math.random() * 3 + 1 // For parallax depth
        });
      }
    }

    initStars();

    // Shooting stars
    let shootingStars = [];
    function maybeCreateShootingStar() {
      if (Math.random() < 0.008 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.5),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 7 + 4,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    }

    // Animation loop
    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const parallaxOffsetX = (mouse.x - width / 2) * 0.015;
      const parallaxOffsetY = (mouse.y - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Render cosmic background stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Pulse alpha
        s.alpha += s.pulseSpeed * s.pulseDirection;
        if (s.alpha >= 1) {
          s.alpha = 1;
          s.pulseDirection = -1;
        } else if (s.alpha <= 0.15) {
          s.alpha = 0.15;
          s.pulseDirection = 1;
        }

        const px = s.x - parallaxOffsetX * s.layer;
        const py = s.y - parallaxOffsetY * s.layer;

        // Wrap around viewport edges
        const finalX = (px + width) % width;
        const finalY = (py + height) % height;

        ctx.beginPath();
        ctx.arc(finalX, finalY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = s.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = s.color;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      // Render Shooting Stars
      maybeCreateShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= ss.decay;

        if (ss.alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.strokeStyle = `rgba(214, 168, 95, ${ss.alpha * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [speedMultiplier, interactive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
      aria-hidden="true"
    />
  );
}
