import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BirthdayMessagesProps {
  onNext: () => void;
}

export const BirthdayMessages: React.FC<BirthdayMessagesProps> = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const loveMessages = [
    "My dearest love,",
    "",
    "On this special day, I want to tell you how much you mean to me.",
    "You are the sunshine in my cloudy days, the stars in my darkest nights.",
    "Your smile is the most beautiful thing I've ever seen,",
    "and your laughter is the sweetest music to my ears.",
    "",
    "Every day with you is a gift I treasure.",
    "You make me a better person just by being in my life.",
    "Your kindness, your beauty, your amazing heart...",
    "everything about you makes me fall in love with you more and more.",
    "",
    "I promise to love you through all the seasons of life,",
    "through every adventure and every quiet moment.",
    "You are my soulmate, my best friend, and my everything.",
    "",
    "Happy Birthday, my beautiful angel!",
    "May all your dreams come true and may our love",
    "continue to grow stronger with each passing day.",
    "",
    "Forever yours, with all my love 💕"
  ];

  useEffect(() => {
    const fullText = loveMessages.join('\n');
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  const handleNext = () => {
    if (isTyping) {
      // If still typing, show full text immediately
      const fullText = loveMessages.join('\n');
      setDisplayedText(fullText);
      setIsTyping(false);
    } else {
      // If done typing, proceed to next section
      onNext();
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-6">
            💌 My Love Letter to You 💌
          </h2>
          <p className="text-xl text-muted-foreground">
            A special message from my heart to yours... 💕
          </p>
        </div>
        
        {/* Love Letter Card */}
        <Card className="bg-gradient-love p-8 shadow-card animate-romantic-glow mb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-3xl animate-heart-float opacity-60">💕</div>
          <div className="absolute top-4 right-4 text-3xl animate-twinkle opacity-60">✨</div>
          <div className="absolute bottom-4 left-4 text-3xl animate-teddy-bounce opacity-60">🧸</div>
          <div className="absolute bottom-4 right-4 text-3xl animate-float-slow opacity-60">🌸</div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="text-4xl animate-heartbeat mb-4">💝</div>
              <h3 className="text-2xl font-romantic text-primary mb-4">A Letter From My Heart</h3>
            </div>
            
            {/* Typing Animation */}
            <div className="bg-white/90 rounded-lg p-6 shadow-inner min-h-[400px] flex items-center justify-center">
              <div className="text-left w-full">
                <pre className="font-romantic text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </pre>
              </div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-primary/20 rounded-lg pointer-events-none"></div>
          </div>
        </Card>

        {/* Additional Romantic Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-birthday p-6 shadow-card hover:shadow-soft transition-bounce hover:scale-105 animate-fade-in backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-heartbeat">💖</div>
              <p className="text-lg font-medium text-foreground leading-relaxed font-poppins">
                "You are my today and all of my tomorrows."
              </p>
            </div>
          </Card>
          
          <Card className="bg-gradient-surprise p-6 shadow-card hover:shadow-soft transition-bounce hover:scale-105 animate-fade-in backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-twinkle">🌟</div>
              <p className="text-lg font-medium text-foreground leading-relaxed font-poppins">
                "In you, I found my forever and always."
              </p>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            variant="surprise" 
            size="lg" 
            onClick={handleNext}
            className="text-xl px-8 py-4 h-auto font-playful animate-romantic-glow"
          >
            {isTyping ? '💕 Skip to Full Message 💕' : '🎁 Continue to Surprises 🎁'}
          </Button>
        </div>
      </div>
    </div>
  );
};