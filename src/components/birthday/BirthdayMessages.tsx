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
    "Pawni! Pawni! Pawni!",
    "",    
    "On this special day, I just have to tell you how incredibly special you are to me.",
    "You are the light that brightens my cloudy days and the comfort in my darkest nights.",
    "Your smile is genuinely one of the most beautiful sights in the world, and your laughter is a sound I could listen to forever.",
    "Every moment we share is a gift I hold onto. Being your friend has made me a better person in so many ways.",
    "Your kindness, your spirit, your unbelievably good heart... I admire everything about you more than you know.",
    "I promise to always be your biggest cheerleader, to cherish our adventures and our quiet moments alike.",
    "You are my truest friend, and our bond means the world to me.",
    "Happy Birthday, my beautiful girl. May your dreams come true and may our bond grow stronger with every year.",
    "",
    "With so much love, 💕"
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
    // If still typing, show full text immediately
    const fullText = loveMessages.join('\n');
    setDisplayedText(fullText);
    setIsTyping(false);
    
    // Add a small delay before proceeding if we're skipping the typing
    if (isTyping) {
      setTimeout(() => {
        onNext();
      }, 500); // Give 500ms to see the complete message
    } else {
      // If already done typing, proceed immediately
      onNext();
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playful bg-gradient-romantic bg-clip-text text-transparent mb-6">
            💌 My Message to You 💌
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground [font-family:'Beautyful',cursive]">
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
              <h3 className="text-2xl font-romantic text-primary mb-4 font-bold tracking-wide">A Letter From My Heart</h3>
            </div>
            
            {/* Typing Animation */}
            <div className="bg-white/90 rounded-lg p-6 shadow-inner min-h-[400px] flex items-center justify-center">
              <div className="text-left w-full">
                <pre className="font-romantic text-xl md:text-2xl text-foreground leading-relaxed whitespace-pre-wrap">
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
                "You are So Special to me. 💕"
              </p>
            </div>
          </Card>
          
          <Card className="bg-gradient-surprise p-6 shadow-card hover:shadow-soft transition-bounce hover:scale-105 animate-fade-in backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-twinkle">🌟</div>
              <p className="text-lg font-medium text-foreground leading-relaxed font-poppins">
                "Happy Birthday to the one who is so special to me. 💕"
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