import React, { useRef, useEffect, useCallback } from 'react';

/**
 * BackgroundVideo
 * Displays the user's preferred cosmic nebula video (/videos/222270_small.mp4)
 * looping continuously and seamlessly in the background across the entire website.
 * Brightness is comfortably balanced for stunning visual depth and crystal-clear text readability.
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const videoSrc = '/videos/222270_small.mp4';

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('loop', '');

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay waiting for user gesture:', err?.message || err);
      });
    }
  }, []);

  useEffect(() => {
    attemptPlay();

    // Re-trigger on any user interaction in case browser restricted autoplay
    const handleFirstInteraction = () => {
      attemptPlay();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    // Ensure continuous playback on tab visibility restore
    const handleVisibility = () => {
      if (!document.hidden) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [attemptPlay]);

  return (
    <div
      className="skyera-background-video-wrap"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#0D1B2A'
      }}
      aria-hidden="true"
    >
      {/* Preferred Cosmic Nebula Video: Seamless Infinite Loop */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onCanPlay={attemptPlay}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          opacity: 0.8,
          filter: 'contrast(1.04) brightness(0.78)'
        }}
      />

      {/* Balanced Celestial Scrim Overlay: Slightly softens bright glare for optimal text contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(ellipse at 50% 38%, rgba(13, 27, 42, 0.35) 0%, rgba(13, 27, 42, 0.72) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
