import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeartExplosion } from './HeartExplosion';

interface EndingSectionProps {
  onReplay: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onReplay }) => {
  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background layer for floating emojis */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={`ending-heart-${i}`}
            className="absolute text-2xl sm:text-3xl animate-heart-float opacity-30"
            style={{
              top: `${10 + (i * 4) % 80}%`,
              left: `${5 + (i * 7) % 90}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.2}s`,
              zIndex: 0
            }}
          >
            {i % 5 === 0 ? '💖' : i % 5 === 1 ? '💕' : i % 5 === 2 ? '🌸' : i % 5 === 3 ? '✨' : '🧸'}
          </div>
        ))}
      </div>

      {/* Main content layer */}
      <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 1 }}>
        <div className="animate-fade-in backdrop-blur-sm rounded-3xl p-4">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-heartbeat">💕</div>
            <h2 className="text-5xl md:text-6xl font-playful text-primary mb-6 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.1), 0 0 20px hsl(330 100% 85% / 0.5)' }}>
              Thank you for being my amazing Friend
            </h2>
            <h3 className="text-3xl md:text-4xl font-romantic text-primary mb-8 animate-typing overflow-hidden whitespace-nowrap transform transition-all duration-300 hover:scale-105">
              Happy Birthday once again! 🎉
            </h3>
          </div>
          
          <Card className="bg-gradient-love/95 p-8 shadow-card mb-12 backdrop-blur-md animate-romantic-glow relative">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-poppins">
              I hope this little birthday website brought a smile to your beautiful face! 😊<br />
              You're absolutely amazing, and I'm so grateful to have you in my life. 🌟<br />
              Here's to another year of wonderful memories, adventures, and joy together! 🥳💕
            </p>
          </Card>
          
          <div className="space-y-4 relative">
            {/* Heart Explosion Button */}
            <HeartExplosion className="text-sm px-4 py-2 h-auto relative" />
            
            <Button 
              variant="birthday" 
              size="lg" 
              onClick={onReplay}
              className="text-xl px-12 py-6 h-auto font-playful animate-romantic-glow backdrop-blur-sm relative"
            >
              💕 Experience the Magic Again 💕
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};