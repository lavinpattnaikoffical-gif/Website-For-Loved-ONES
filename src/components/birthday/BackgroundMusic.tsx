import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play when component mounts (with user interaction)
    const handleFirstClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay blocked by browser');
        });
      }
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className="bg-gradient-romantic p-4 shadow-card animate-romantic-glow backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
          {/* Music Icon */}
          <div className="text-2xl animate-heartbeat">
            {isPlaying ? '🎵' : '🔇'}
          </div>
          
          {/* Play/Pause Button */}
          <Button
            onClick={togglePlayPause}
            variant="secondary"
            size="sm"
            className="rounded-full w-10 h-10 p-0 animate-bounce-gentle"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </Button>
          
          {/* Volume Control */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${volume * 100}%, hsl(var(--primary) / 0.2) ${volume * 100}%, hsl(var(--primary) / 0.2) 100%)`
              }}
            />
            <span className="text-xs text-muted-foreground">{Math.round(volume * 100)}%</span>
          </div>
          
          {/* Music Info */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground font-romantic">
              Romantic Background Music
            </p>
            <p className="text-xs text-muted-foreground">
              {/* TODO: Replace with your romantic music file */}
              <em>Add your favorite romantic song here</em>
            </p>
          </div>
        </div>
      </Card>
      
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        {/* TODO: Replace with your romantic music file */}
        {/* 
        <source src="/path/to/your/romantic-song.mp3" type="audio/mpeg" />
        <source src="/path/to/your/romantic-song.ogg" type="audio/ogg" />
        */}
        <p className="text-xs text-muted-foreground p-2">
          Your browser does not support the audio element.
        </p>
      </audio>
    </div>
  );
};
