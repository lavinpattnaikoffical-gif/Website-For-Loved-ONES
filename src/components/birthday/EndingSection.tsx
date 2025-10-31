import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeartExplosion } from './HeartExplosion';

interface EndingSectionProps {
  onReplay: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onReplay }) => {
  return (
    <div className="min-h-screen py-8 sm:py-16 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-heartbeat">💕</div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
              Thank you for being YOU, my love
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-romantic text-primary mb-6 sm:mb-8 animate-typing overflow-hidden whitespace-nowrap transform transition-all duration-300 hover:scale-105 hover:bg-gradient-birthday hover:bg-clip-text hover:text-transparent px-2">
              Happy Birthday once again! 🎉
            </h3>
          </div>
          
          <Card className="bg-gradient-love p-4 sm:p-8 shadow-card mb-8 sm:mb-12 backdrop-blur-sm animate-romantic-glow mx-2">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-poppins">
              I hope this little birthday website brought a smile to your beautiful face! 😊
              <span className="block my-2">You're absolutely amazing, and I'm so grateful to have you in my life. 🌟</span>
              <span className="block">Here's to another year of wonderful memories, adventures, and endless love together! 🥳💕</span>
            </p>
          </Card>
          
          <div className="space-y-4 sm:space-y-6 px-2">
            {/* Heart Explosion Button */}
            <HeartExplosion className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 h-auto w-full sm:w-auto" />
            
            <Button 
              variant="birthday" 
              size="lg" 
              onClick={onReplay}
              className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 h-auto font-playful animate-romantic-glow w-full sm:w-auto"
            >
              💕 Experience the Magic Again 💕
            </Button>
          </div>
        </div>
      </div>
      
      {/* Extra floating romantic elements for the ending */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`ending-heart-${i}`}
            className="absolute text-3xl animate-heart-float opacity-60"
            style={{
              top: `${10 + (i * 3) % 80}%`,
              left: `${5 + (i * 6) % 90}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.1}s`
            }}
          >
            {i % 5 === 0 ? '💖' : i % 5 === 1 ? '💕' : i % 5 === 2 ? '🌸' : i % 5 === 3 ? '✨' : '🧸'}
          </div>
        ))}
      </div>
    </div>
  );
};