import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play when component mounts (with user interaction)
    const handleFirstClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay blocked by browser');
        });
        setIsPlaying(true);
      }
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Could not play audio');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <audio ref={audioRef} loop src="/music/romantic-melody.mp3" />
      <Button
        onClick={togglePlayPause}
        variant="secondary"
        size="sm"
        className="rounded-full w-10 h-10 p-0 shadow-card hover:scale-105 transition-all duration-300 bg-gradient-romantic"
      >
        {isPlaying ? '🎵' : '🔇'}
      </Button>
    </div>
  );
};