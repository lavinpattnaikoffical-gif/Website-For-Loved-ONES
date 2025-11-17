import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import cakeImage from '@/assets/birthday-cake.jpg';
import fireworksImage from '@/assets/fireworks.jpg';

interface SurpriseSectionProps {
  onNext: () => void;
  showSurprise: boolean;
  setShowSurprise: (show: boolean) => void;
}

interface SurpriseItem {
  id: string;
  emoji: string;
  title: string;
  message: string;
  x: number;
  y: number;
  animationDelay: string;
}

export const SurpriseSection: React.FC<SurpriseSectionProps> = ({ 
  onNext, 
  showSurprise, 
  setShowSurprise 
}) => {
  const [selectedSurprise, setSelectedSurprise] = useState<SurpriseItem | null>(null);
  const [openedSurprises, setOpenedSurprises] = useState<Set<string>>(new Set());

  const surpriseItems: SurpriseItem[] = [
    {
      id: 'gift1',
      emoji: '🎁',
      title: 'Special Gift Box',
      message: 'I hope this brings you as much joy as you bring me! Every day I get to spend with you is a gift I treasure. Thank you for making my world so much brighter! 💕',
      x: 20,
      y: 30,
      animationDelay: '0s'
    },
    {
      id: 'doll1',
      emoji: '🧸',
      title: 'Teddy Bear Love',
      message: 'Like this teddy bear, I want to be your comfort and joy forever. You\'re the sweetest person I know, and I promise to always be there to brighten your day! 🧸💖',
      x: 60,
      y: 20,
      animationDelay: '0.5s'
    },
    {
      id: 'heart1',
      emoji: '💕',
      title: 'Heart of Hearts',
      message: "You're truly one of a kind! You have such a special place in my heart, and every day I'm more grateful for our friendship. You're my best friend, and you mean the world to me! 💕✨",
      x: 80,
      y: 60,
      animationDelay: '1s'
    },
    {
      id: 'gift2',
      emoji: '🎀',
      title: 'Romantic Surprise',
      message: 'Consider this surprise wrapped in all the love my heart holds! You deserve the entire universe. Every morning is a reminder of how lucky I am to be walking this beautiful path of life with you. 🌹💝',
      x: 30,
      y: 70,
      animationDelay: '1.5s'
    },
    {
      id: 'doll2',
      emoji: '🦄',
      title: 'Magical Unicorn',
      message: 'You\'re as magical as this unicorn! You bring wonder and joy into my life every single day. Your kindness, beauty, and amazing personality make you truly one of a kind! ✨🦄',
      x: 70,
      y: 40,
      animationDelay: '2s'
    },
    {
      id: 'heart2',
      emoji: '💖',
      title: 'Eternal Love',
      message: "My love for you is eternal and endless! Through all the seasons of life, through My friendship and support for you are endless! Through all the seasons of life, through every up and down, you can count on me to be there. I'll always be constant and true. Forever and always! 💖🌙",
      x: 50,
      y: 80,
      animationDelay: '2.5s'
    }
  ];

  const handleSurpriseClick = (surprise: SurpriseItem) => {
    setSelectedSurprise(surprise);
    setOpenedSurprises(prev => new Set(prev).add(surprise.id));
  };

  const closeSurprise = () => {
    setSelectedSurprise(null);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Always-visible section heading */}
        <div className="relative mb-4">
          {/* Cute decorative elements */}
          <div className="absolute -top-4 left-1/4 text-3xl animate-heartbeat opacity-80" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💝</div>
          <div className="absolute -top-2 right-1/4 text-2xl animate-twinkle opacity-70" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>✨</div>
          <div className="absolute -bottom-2 left-1/3 text-2xl animate-float opacity-75" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🎀</div>
          <div className="absolute -bottom-2 right-1/3 text-2xl animate-heartbeat opacity-80" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>💖</div>
          
          <h2 className="text-5xl md:text-6xl font-playful mb-4 transition-transform duration-300 hover:scale-105 relative z-10" style={{ 
            color: '#d63384',
            textShadow: '0 2px 20px rgba(214, 51, 132, 0.4), 0 0 30px rgba(214, 51, 132, 0.2)',
            letterSpacing: '0.02em'
          }}>
            Romantic Surprises
          </h2>
        </div>

        {!showSurprise ? (
          <div className="animate-fade-in relative">
            {/* Soft floating background accents */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-6 left-8 text-4xl opacity-30 animate-float-slow">💕</div>
              <div className="absolute top-10 right-12 text-3xl opacity-30 animate-twinkle">✨</div>
              <div className="absolute bottom-8 left-16 text-4xl opacity-30 animate-bounce-gentle">🎀</div>
              <div className="absolute bottom-10 right-10 text-4xl opacity-30 animate-float-slow">🧸</div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-romantic">
              Tap the floating gifts to reveal sweet secrets, one by one! 💞
            </p>
            <p className="text-sm md:text-base text-primary/80 mb-12 font-poppins">
              Each surprise holds a tiny piece of my heart. Open them all to unlock a bonus wish ✨
            </p>
            
            <Button 
              variant="surprise" 
              size="lg" 
              onClick={() => setShowSurprise(true)}
              className="text-2xl px-12 py-6 h-auto font-playful animate-romantic-glow"
            >
              💕 Open Your Heart's Surprises 💕
            </Button>
          </div>
        ) : (
          <div className="animate-scale-in">
            <div className="mb-4" />
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-romantic text-primary mb-3 transition-transform duration-300 hover:scale-105">
                ✨ Click on the surprises below ✨
              </h2>
              {/* Progress Indicator */}
              <div className="max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-2 text-sm font-poppins">
                  <span className="text-muted-foreground">Surprises opened</span>
                  <span className="text-primary font-medium">{openedSurprises.size}/{surpriseItems.length}</span>
                </div>
                <Progress value={(openedSurprises.size / surpriseItems.length) * 100} />
              </div>
            </div>
            
            {/* Interactive Surprise Items */}
            <div className="relative h-96 mb-12">
              {surpriseItems.map((surprise) => (
                <button
                  key={surprise.id}
                  onClick={() => handleSurpriseClick(surprise)}
                  className={`absolute text-6xl transition-all duration-300 hover:scale-125 ${
                    openedSurprises.has(surprise.id)
                      ? 'opacity-50'
                      : ''
                  }`}
                  style={{
                    left: `${surprise.x}%`,
                    top: `${surprise.y}%`,
                    animationDelay: surprise.animationDelay,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={surprise.title}
                >
                  {surprise.emoji}
                </button>
              ))}
            </div>

            {/* Birthday Cake Section */}
            <Card className="bg-gradient-cake p-8 shadow-card mb-8 relative overflow-hidden">
              <h3 className="text-2xl font-romantic text-primary mb-4">🎂 Make a Wish! 🎂</h3>
              <div 
                className="w-48 h-48 mx-auto rounded-full bg-cover bg-center shadow-soft mb-4"
                style={{ backgroundImage: `url(${cakeImage})` }}
              />
              
              {/* Floating candle flames */}
              <div className="flex justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-2xl animate-candle-flicker" style={{ animationDelay: `${i * 0.2}s` }}>
                    🕯️
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Fireworks */}
            <div className="relative mb-8">
              <div 
                className="w-full h-24 bg-cover bg-center rounded-xl opacity-60"
                style={{ backgroundImage: `url(${fireworksImage})` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl animate-firework">🎆🎇✨🎆🎇</div>
              </div>
            </div>
            
            {/* Bonus unlock when all opened */}
            {openedSurprises.size === surpriseItems.length && (
              <Card className="bg-gradient-love p-6 shadow-card animate-romantic-glow mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-heartbeat">💖</div>
                  <h4 className="text-2xl font-romantic text-primary mb-2">Bonus Wish Unlocked</h4>
                  <p className="text-lg text-foreground font-poppins">
                    You opened every surprise! Make a special wish and keep it in your heart.
                  </p>
                </div>
              </Card>
            )}

            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-2xl text-primary mb-8 animate-heartbeat font-romantic">
                Hope all your wishes come true! 🌟
              </p>
              
              <Button 
                variant="cake" 
                size="lg" 
                onClick={onNext}
                className="text-xl px-8 py-4 h-auto font-playful"
              >
                💌 Continue to Birthday Messages 💌
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Surprise Message Dialog */}
      <Dialog open={!!selectedSurprise} onOpenChange={closeSurprise}>
        <DialogContent className="bg-gradient-romantic border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-romantic text-primary flex items-center gap-2">
              {selectedSurprise?.emoji} {selectedSurprise?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-lg text-foreground leading-relaxed font-poppins">
              {selectedSurprise?.message}
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={closeSurprise}
              className="font-playful"
              variant="secondary"
            >
              💕 Close 💕
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};


