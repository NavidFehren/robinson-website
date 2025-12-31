import React, { useRef, useState, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, poster, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    // Load and play video when visible
    video.load();
    video.play().catch(() => {
      // Autoplay may be blocked, that's okay
    });
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
      onLoadedData={() => setIsLoaded(true)}
      className={`${className} ${!isLoaded ? 'bg-sand-100' : ''}`}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;
