import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const BackgroundMusic: React.FC = () => {
  // Get initial state from localStorage or default to true
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem('bgMusicPlaying');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  // Save playing state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bgMusicPlaying', JSON.stringify(isPlaying));
  }, [isPlaying]);

  useEffect(() => {
    // Try to play automatically when component mounts
    const playMusic = async () => {
      if (audioRef.current) {
        if (isPlaying) {
          try {
            await audioRef.current.play();
          } catch (error) {
            console.log('Autoplay blocked by browser - waiting for user interaction');
          }
        } else {
          audioRef.current.pause();
        }
      }
    };

    // Try immediate autoplay
    playMusic();

    // Set up click handler for browsers that block autoplay
    const handleFirstClick = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {
          console.log('Could not play audio');
        });
      }
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, [isPlaying]);

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Could not toggle audio:', error);
      }
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <audio 
        ref={audioRef} 
        loop 
        src="/music/romantic-melody.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <Button
        onClick={togglePlayPause}
        variant="secondary"
        size="sm"
        className={`rounded-full w-10 h-10 p-0 shadow-card hover:scale-105 transition-all duration-300 ${
          isPlaying ? 'bg-gradient-romantic' : 'bg-muted'
        }`}
        title={isPlaying ? 'Click to mute' : 'Click to play'}
      >
        {isPlaying ? '🎵' : '🔇'}
      </Button>
    </div>
  );
};