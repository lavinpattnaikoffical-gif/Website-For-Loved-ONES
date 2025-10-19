import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
      message: 'This gift box contains all my love for you! Every day with you is a gift, and I treasure every moment we share together. You make my world brighter just by being in it! 💕',
      x: 20,
      y: 30,
      animationDelay: '0s'
    },
    {
      id: 'doll1',
      emoji: '🧸',
      title: 'Teddy Bear Love',
      message: 'Like this teddy bear, I want to be your comfort and joy forever. You\'re the sweetest person I know, and I promise to always be there to give you warm hugs and make you smile! 🧸💖',
      x: 60,
      y: 20,
      animationDelay: '0.5s'
    },
    {
      id: 'heart1',
      emoji: '💕',
      title: 'Heart of Hearts',
      message: 'My heart beats only for you! You\'ve captured my heart completely, and every day I fall more in love with you. You\'re my soulmate, my best friend, and my everything! 💕✨',
      x: 80,
      y: 60,
      animationDelay: '1s'
    },
    {
      id: 'gift2',
      emoji: '🎀',
      title: 'Romantic Surprise',
      message: 'This surprise is wrapped with all my love! You deserve the world and more. Every day I wake up grateful that you chose me to be your partner in this beautiful journey called life! 🌹💝',
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
      message: 'My love for you is eternal and endless! Through all the seasons of life, through every up and down, my love for you will always remain constant and true. Forever and always! 💖🌙',
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
        {!showSurprise ? (
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-8">
              🎁 Romantic Surprises 🎁
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Click on the surprises to discover sweet messages just for you! 💕
            </p>
            
            <Button 
              variant="surprise" 
              size="lg" 
              onClick={() => setShowSurprise(true)}
              className="text-2xl px-12 py-6 h-auto font-playful animate-romantic-glow"
            >
              💕 Open My Heart's Surprises 💕
            </Button>
          </div>
        ) : (
          <div className="animate-scale-in">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-romantic text-primary mb-6 animate-twinkle">
                ✨ Click on the surprises below ✨
              </h2>
            </div>
            
            {/* Interactive Surprise Items */}
            <div className="relative h-96 mb-12">
              {surpriseItems.map((surprise) => (
                <button
                  key={surprise.id}
                  onClick={() => handleSurpriseClick(surprise)}
                  className={`absolute text-6xl transition-all duration-300 hover:scale-125 ${
                    openedSurprises.has(surprise.id) 
                      ? 'animate-heart-explosion opacity-50' 
                      : 'animate-bounce-gentle hover:animate-gift-shake'
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
            <Card className="bg-gradient-cake p-8 shadow-card animate-cake-glow mb-8 relative overflow-hidden">
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
            
            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-2xl text-primary mb-8 animate-heartbeat font-romantic">
                Hope all your wishes come true, my love! 🌟
              </p>
              
              <Button 
                variant="cake" 
                size="lg" 
                onClick={onNext}
                className="text-xl px-8 py-4 h-auto font-playful"
              >
                💌 Continue to Love Letter 💌
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