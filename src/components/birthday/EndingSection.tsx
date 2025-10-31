import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeartExplosion } from './HeartExplosion';

interface EndingSectionProps {
  onReplay: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onReplay }) => {
  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-heartbeat">💕</div>
            <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-6">
              Thank you for being YOU, my love
            </h2>
            <h3 className="text-3xl md:text-4xl font-romantic text-primary mb-8 animate-typing overflow-hidden whitespace-nowrap transform transition-all duration-300 hover:scale-105 hover:bg-gradient-birthday hover:bg-clip-text hover:text-transparent">
              Happy Birthday once again! 🎉
            </h3>
          </div>
          
          <Card className="bg-gradient-love p-8 shadow-card mb-12 backdrop-blur-sm animate-romantic-glow">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-poppins">
              I hope this little birthday website brought a smile to your beautiful face! 😊<br />
              You're absolutely amazing, and I'm so grateful to have you in my life. 🌟<br />
              Here's to another year of wonderful memories, adventures, and endless love together! 🥳💕
            </p>
          </Card>
          
          <div className="space-y-6">
            {/* Heart Explosion Button */}
            <HeartExplosion className="text-xl px-12 py-6 h-auto" />
            
            <Button 
              variant="birthday" 
              size="lg" 
              onClick={onReplay}
              className="text-xl px-12 py-6 h-auto font-playful animate-romantic-glow"
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