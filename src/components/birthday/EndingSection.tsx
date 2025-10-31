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
      <div className="max-w-sm sm:max-w-4xl mx-auto text-center w-full relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <div className="text-5xl sm:text-8xl mb-4 sm:mb-6 animate-heartbeat">💕</div>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-4 sm:mb-6 px-2 leading-tight">
              Thank you for being YOU, my love
            </h2>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-romantic text-primary mb-6 sm:mb-8 px-2 leading-relaxed">
              Happy Birthday once again! 🎉
            </h3>
          </div>
          
          <Card className="bg-gradient-love/95 p-4 sm:p-8 shadow-card mb-8 sm:mb-12 backdrop-blur-sm animate-romantic-glow mx-auto max-w-xs sm:max-w-2xl">
            <p className="text-base sm:text-xl md:text-2xl text-foreground leading-relaxed font-poppins">
              I hope this little birthday website brought a smile to your beautiful face! 😊
              <span className="block my-3">You're absolutely amazing, and I'm so grateful to have you in my life. 🌟</span>
              <span className="block">Here's to another year of wonderful memories, adventures, and endless love together! 🥳💕</span>
            </p>
          </Card>
          
          <div className="space-y-4 sm:space-y-6 px-2 max-w-xs sm:max-w-md mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground font-romantic italic">
              I tried to make something for you, hope you like it 💝
            </p>
            
            <Button 
              variant="birthday" 
              size="lg" 
              onClick={onReplay}
              className="text-sm sm:text-base px-4 sm:px-8 py-3 sm:py-4 h-auto font-playful animate-romantic-glow w-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              💕 Experience the Magic Again 💕
            </Button>
          </div>
        </div>
      </div>
      
      {/* Extra floating romantic elements for the ending */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`ending-heart-${i}`}
            className="absolute text-xl sm:text-2xl animate-heart-float opacity-40"
            style={{
              top: `${15 + (i * 5) % 70}%`,
              left: `${10 + (i * 8) % 85}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.2}s`
            }}
          >
            {i % 5 === 0 ? '💖' : i % 5 === 1 ? '💕' : i % 5 === 2 ? '🌸' : i % 5 === 3 ? '✨' : '🧸'}
          </div>
        ))}
      </div>
    </div>
  );
};