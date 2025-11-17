import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BirthdayQuizProps {
  onNext: () => void;
}

export const BirthdayQuiz: React.FC<BirthdayQuizProps> = ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const questions = [
    {
      question: "What's your favorite ice cream flavor? 🍦",
      options: ["Vanilla", "Chocolate", "Strawberry", "Mint Chip"],
      correctAnswer: "Vanilla", // You can change these
      funMessage: "Yay! You know yourself well 😍"
    },
    {
      question: "What's your ideal way to spend a weekend? 🌟",
      options: ["Reading a book", "Going on adventures", "Relaxing at home", "Trying new restaurants"],
      correctAnswer: "Going on adventures",
      funMessage: "That's so you! Adventure awaits! 🚀"
    },
    {
      question: "What makes you happiest? 💕",
      options: ["Spending time with loved ones", "Achieving goals", "Helping others", "Creating something new"],
      correctAnswer: "Spending time with loved ones",
      funMessage: "Your heart is so warm and beautiful! 💖"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowResult(false);
        setSelectedAnswer('');
      } else {
        setTimeout(() => {
          onNext();
        }, 2000);
      }
    }, 2500);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative mb-6">
            {/* Cute decorative elements */}
            <div className="absolute -top-4 left-1/4 text-3xl animate-twinkle opacity-70">✨</div>
            <div className="absolute -top-2 right-1/4 text-2xl animate-heartbeat opacity-80">💕</div>
            <div className="absolute -bottom-2 left-1/3 text-2xl animate-float opacity-75">🎯</div>
            <div className="absolute -bottom-2 right-1/3 text-2xl animate-heartbeat opacity-80">💖</div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative z-10" style={{ 
              background: 'linear-gradient(135deg, #ff6b9d, #c44569, #a8e6cf, #ff6b9d)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease infinite',
              filter: 'drop-shadow(0 0 15px rgba(255, 107, 157, 0.4))'
            }}>
              🎮 Birthday Quiz 🎮
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            A fun little game about YOU! 
          </p>
          <div className="text-sm text-muted-foreground mt-4">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        <Card className="bg-card/90 backdrop-blur-sm p-8 shadow-card animate-scale-in">
          {!showResult ? (
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary transform transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg p-4 rounded-lg">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    onClick={() => handleAnswerSelect(option)}
                    className="text-lg py-6 h-auto hover:bg-gradient-birthday transition-bounce hover:scale-105"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6 animate-heartbeat">🎉</div>
              <p className="text-2xl font-bold text-primary mb-4">
                {questions[currentQuestion].funMessage}
              </p>
              <div className="text-lg text-muted-foreground">
                {currentQuestion < questions.length - 1 ? 
                  "Next question coming up..." : 
                  "Quiz complete! Moving on... ✨"
                }
              </div>
            </div>
          )}
        </Card>
        
        {/* Progress indicator */}
        <div className="mt-8 bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-birthday h-full transition-smooth rounded-full"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};