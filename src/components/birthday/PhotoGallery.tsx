import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PhotoGalleryProps {
  onNext: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onNext }) => {
  // Place these files under: public/photos/
  const photos = [
    {
      image: '/photos/yellow-dress.jpg',
      caption: "Sunshine In Yellow 🌼",
      description: "That glow in your favorite yellow dress"
    },
    {
      image: '/photos/pink-top-selfie.jpg',
      caption: "Sweetest Selfie 💗",
      description: "Your smile lights up everything"
    },
    {
      image: '/photos/sunglasses-couple.jpg',
      caption: "Cool Together 😎",
      description: "Sunglasses on, vibes on point"
    },
    {
      image: '/photos/pink-saree.jpg',
      caption: "Pretty In Pink ✨",
      description: "Elegance in a pink saree"
    },
    {
      image: '/photos/bench-night.jpg',
      caption: "Starry Night Stroll 🌙",
      description: "Calm moments under fairy lights"
    },
    {
      image: '/photos/temple-selfie.jpg',
      caption: "Blessed Smiles 🙏",
      description: "A divine day captured perfectly"
    },
    {
      image: '/photos/mall-ganesha.jpg',
      caption: "With Bappa's Blessings 🪔",
      description: "Cute pose by Lord Ganesha"
    },
    {
      image: '/photos/grey-gown-night.jpg',
      caption: "Moonlit Glamour 🌌",
      description: "You shining brighter than the lights"
    },
    {
      image: '/photos/farewell-stage.jpg',
      // Try multiple extensions just in case the file is .jpeg/.png/.webp or uppercase
      candidates: [
        '/photos/farewell-stage.jpg',
        '/photos/farewell-stage.jpeg',
        '/photos/farewell-stage.png',
        '/photos/farewell-stage.webp',
        '/photos/farewell-stage.JPG',
        '/photos/farewell-stage.JPEG',
        '/photos/farewell-stage.PNG',
        '/photos/farewell-stage.WEBP'
      ],
      caption: "Stage Star ⭐",
      description: "Farewell memories to cherish"
    }
  ];

  // Track the currently chosen src per photo (to allow fallback onError)
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [currentSrcs, setCurrentSrcs] = React.useState(
    photos.map((p: any) => p.image)
  );

  // Auto-slide functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, photos.length]);

  const handleImageError = () => {
    const photo: any = photos[currentPhotoIndex] as any;
    const candidates: string[] = photo.candidates || [photo.image];
    const currentSrc = currentSrcs[currentPhotoIndex];
    const pos = candidates.indexOf(currentSrc);
    const nextSrc = pos >= 0 && pos < candidates.length - 1
      ? candidates[pos + 1]
      : '/placeholder.svg';
    setCurrentSrcs((prev) => {
      const next = [...prev];
      next[currentPhotoIndex] = nextSrc;
      return next;
    });
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-6">
            📸 Your Beautiful Memories 📸
          </h2>
          <p className="text-xl text-muted-foreground">
            Here are your most precious memories together! 💕
          </p>
        </div>
        
        {/* Photo Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-romantic p-8 shadow-card animate-romantic-glow overflow-hidden">
            <div className="relative">
              {/* Main Photo Display (smaller to avoid upscaling/pixelation) */}
              <div className="mx-auto w-72 h-72 md:w-96 md:h-96 bg-gradient-soft border-4 border-primary/30 rounded-2xl flex items-center justify-center relative mb-6 overflow-hidden">
                <img 
                  src={currentSrcs[currentPhotoIndex]} 
                  alt={photos[currentPhotoIndex].caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover select-none transition-all duration-500 ease-in-out"
                  onError={handleImageError}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-3 text-center">
                  <p className="text-sm italic">
                    {photos[currentPhotoIndex].description}
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
                  {photos[currentPhotoIndex].caption}
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
                <div className="flex gap-3 items-center">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentPhotoIndex 
                          ? 'bg-gradient-romantic shadow-glow scale-125 animate-pulse-soft' 
                          : 'bg-primary/20 hover:bg-primary/40 hover:scale-110'
                      }`}
                      title={`Photo ${index + 1}`}
                    />
                  ))}
                  <Button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    variant="secondary"
                    size="sm"
                    className="rounded-full w-8 h-8 p-0 ml-2"
                    title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlaying ? '⏸️' : '▶️'}
                  </Button>
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
            Just For You !!!💕
          </Button>
        </div>
      </div>
    </div>
  );
};