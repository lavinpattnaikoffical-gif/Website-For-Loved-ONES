import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PhotoGalleryProps {
  onNext: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onNext }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);
  
  const photoPlaceholders = [
    { 
      caption: "Our First Date 💕", 
      placeholder: "Replace with: first-date-photo.jpg",
      description: "The day our love story began..."
    },
    { 
      caption: "Sweetest Smile 😊", 
      placeholder: "Replace with: beautiful-smile-photo.jpg",
      description: "Your smile that lights up my world"
    },
    { 
      caption: "Funny Moment Together 😂", 
      placeholder: "Replace with: funny-memory-photo.jpg",
      description: "That hilarious moment we shared"
    },
    { 
      caption: "Unforgettable Day 🌟", 
      placeholder: "Replace with: special-day-photo.jpg",
      description: "A day I'll never forget"
    },
    { 
      caption: "Adventure Time 🚀", 
      placeholder: "Replace with: adventure-photo.jpg",
      description: "Our exciting adventures together"
    },
    { 
      caption: "Just Because You're Beautiful 🌸", 
      placeholder: "Replace with: beautiful-moment-photo.jpg",
      description: "Any moment that shows how amazing you are"
    },
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photoPlaceholders.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photoPlaceholders.length) % photoPlaceholders.length);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-6">
            📸 Our Love Story 📸
          </h2>
          <p className="text-xl text-muted-foreground">
            Here are our most precious memories together! 💕
          </p>
        </div>
        
        {/* Photo Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-romantic p-8 shadow-card animate-romantic-glow overflow-hidden">
            <div className="relative">
              {/* Main Photo Display */}
              <div className="aspect-square bg-gradient-soft border-4 border-primary/30 rounded-2xl flex items-center justify-center relative mb-6 overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6 animate-heartbeat">📷</div>
                  <p className="text-lg text-muted-foreground mb-4 font-romantic">
                    {photoPlaceholders[currentPhotoIndex].placeholder}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {photoPlaceholders[currentPhotoIndex].description}
                  </p>
                </div>
                
                {/* Decorative frame elements */}
                <div className="absolute top-4 left-4 text-3xl animate-heart-float">💕</div>
                <div className="absolute top-4 right-4 text-3xl animate-twinkle">✨</div>
                <div className="absolute bottom-4 left-4 text-3xl animate-teddy-bounce">🧸</div>
                <div className="absolute bottom-4 right-4 text-3xl animate-float-slow">🌸</div>
              </div>
              
              {/* Photo Info */}
              <div className="text-center mb-6">
                <h3 className="font-romantic text-3xl text-primary mb-2">
                  {photoPlaceholders[currentPhotoIndex].caption}
                </h3>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4">
                <Button 
                  onClick={prevPhoto}
                  className="rounded-full w-12 h-12 animate-bounce-gentle"
                  variant="secondary"
                >
                  ←
                </Button>
                
                {/* Photo Dots */}
                <div className="flex gap-2">
                  {photoPlaceholders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-3 h-3 rounded-full transition-smooth ${
                        index === currentPhotoIndex 
                          ? 'bg-primary animate-heartbeat' 
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  onClick={nextPhoto}
                  className="rounded-full w-12 h-12 animate-bounce-gentle"
                  variant="secondary"
                >
                  →
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            variant="birthday" 
            size="lg" 
            onClick={onNext}
            className="text-xl px-8 py-4 h-auto font-playful"
          >
            💕 Continue to Love Messages 💕
          </Button>
        </div>
      </div>
    </div>
  );
};