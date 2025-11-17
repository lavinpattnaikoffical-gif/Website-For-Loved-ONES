import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface HeartExplosionProps {
  className?: string;
}

export const HeartExplosion: React.FC<HeartExplosionProps> = ({ className }) => {
  const [showExplosion, setShowExplosion] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const triggerHeartExplosion = () => {
    setShowExplosion(true);
    setShowPopup(true);
    
    // Hide explosion after animation
    setTimeout(() => {
      setShowExplosion(false);
    }, 2000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Heart Explosion Button */}
      <Button
        onClick={triggerHeartExplosion}
        className={`${className} font-playful animate-romantic-glow hover:scale-110 transition-all duration-300`}
        variant="surprise"
        size="lg"
      >
        💕  I tried to make something for you, hope you like it  💕
                            (Click to see)
      </Button>

      {/* Heart Explosion Animation */}
      {showExplosion && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-heart-explosion"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 0.5}s`
              }}
            >
              {['💕', '💖', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Special Popup */}
      <Dialog open={showPopup} onOpenChange={closePopup}>
        <DialogContent className="bg-gradient-love border-primary/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-3xl font-romantic text-primary text-center flex items-center justify-center gap-2">
              💕 💕 So Grateful For You 💕 💖 To my amazing friend, Name! 💕 💖
            </DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center">
            <div className="text-6xl mb-4 animate-heartbeat">💖</div>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed font-poppins">
              Every day of our friendship is a blessing! Every moment is precious, and every dream includes you. 🌟
              </p>
              <p className="text-base text-foreground leading-relaxed font-romantic">
              I'm so incredibly lucky to have you in my life.
              </p>
              <p className="text-lg text-foreground font-playful animate-bounce-gentle">
              So Lucky to Know You 💕
              </p>
            </div>
            
            {/* Additional Hearts */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="text-2xl animate-heartbeat"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {['💕', '💖', '💗', '💝', '❤️'][i]}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={closePopup}
              className="font-playful animate-romantic-glow"
              variant="secondary"
            >
              💕 Always for you, Name!.... 💕
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
