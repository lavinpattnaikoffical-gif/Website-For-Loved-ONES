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
            <div className="text-8xl mb-6 animate-heartbeat" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💕</div>
            <h2 className="text-5xl md:text-6xl font-playful mb-6 relative z-10" style={{ 
              background: 'linear-gradient(135deg, #ff6b9d, #e91e63, #ff9800, #ffc107)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease infinite',
              filter: 'drop-shadow(0 2px 15px rgba(255, 107, 157, 0.5))',
              letterSpacing: '0.02em'
            }}>
              <span className="inline-block animate-pulse mr-2" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💕</span>
              Thank you for being my amazing Friend
              <span className="inline-block animate-pulse ml-2" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💕</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-romantic text-primary mb-8 animate-typing overflow-hidden whitespace-nowrap transform transition-all duration-300 hover:scale-105">
              Happy Birthday once again! <span style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🎉</span>
            </h3>
          </div>
          
          <Card className="bg-gradient-love/95 p-8 shadow-card mb-12 backdrop-blur-md animate-romantic-glow relative">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-poppins">
              I hope this little birthday website brought a smile to your beautiful face! 😊<br />
              You're absolutely amazing, and I'm so grateful to have you in my life. 🌟<br />
              Here's to another year of wonderful memories, adventures, and joy together! 🥳💕
            </p>
          </Card>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative">
            {/* Heart Explosion Button */}
            <HeartExplosion className="relative" />
            
            <Button 
              variant="birthday" 
              size="lg" 
              onClick={onReplay}
              className="text-xl px-12 py-6 h-auto font-playful animate-romantic-glow backdrop-blur-sm relative w-full md:w-auto"
            >
              <span style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💕💕</span> Experience the Magic Again <span style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💕💕</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};