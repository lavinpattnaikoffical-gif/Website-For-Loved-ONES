import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';


// Create a singleton audio instance
const audio = typeof Audio !== 'undefined' ? new Audio('/music/romantic-melody.mp3') : null;
if (audio) {
  audio.loop = true;
}

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Initialize audio and handle autoplay
  useEffect(() => {
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleCanPlayThrough = () => setIsReady(true);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);

    // Try to autoplay immediately when audio is ready
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay blocked - waiting for user interaction');
        setIsPlaying(false);
        
        // Set up one-time click handler for autoplay
        const handleFirstInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
          } catch (error) {
            console.log('Playback failed after interaction');
            setIsPlaying(false);
          }
          document.removeEventListener('click', handleFirstInteraction);
          document.removeEventListener('touchstart', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);
      }
    };

    // Start loading the audio
    audio.load();

    // When audio is ready, attempt autoplay
    if (isReady) {
      attemptAutoplay();
    }

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [isReady]);

  const togglePlayPause = async () => {
    if (!audio || !isReady) return;
    
    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Could not toggle audio:', error);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="relative">
        {!isPlaying && isReady && (
          <div className="absolute -top-8 whitespace-nowrap right-0 transform translate-y-1 animate-bounce-gentle">
            <span className="text-sm sm:text-base font-romantic text-primary bg-background/80 px-3 py-1.5 rounded-full shadow-sm">
              click here 💕
            </span>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary absolute left-[80%] top-full" />
          </div>
        )}
        <Button
          onClick={togglePlayPause}
          variant="secondary"
          size="sm"
          className={`rounded-full w-10 h-10 p-0 shadow-card hover:scale-105 transition-all duration-300 ${
            isPlaying ? 'bg-gradient-romantic' : 'bg-muted'
          } flex items-center justify-center ${!isReady ? 'opacity-50 cursor-wait' : ''}`}
          title={!isReady ? 'Loading...' : isPlaying ? 'Click to pause' : 'Click to play'}
          disabled={!isReady}
        >
          {!isReady ? '⌛' : isPlaying ? '⏸️' : '▶️'}
        </Button>
      </div>
    </div>
  );
};