import React, { useState } from 'react';
import { WelcomeSection } from './birthday/WelcomeSection';
import { PhotoGallery } from './birthday/PhotoGallery';
import { BirthdayMessages } from './birthday/BirthdayMessages';
import { SurpriseSection } from './birthday/SurpriseSection';
import { BirthdayQuiz } from './birthday/BirthdayQuiz';
import { EndingSection } from './birthday/EndingSection';
import { FloatingAnimations } from './birthday/FloatingAnimations';
import { BackgroundMusic } from './birthday/BackgroundMusic';

export const BirthdayWebsite = () => {
  const [currentSection, setCurrentSection] = useState<string>('welcome');
  const [showSurprise, setShowSurprise] = useState(false);

  const sections = ['welcome', 'photos', 'messages', 'surprise', 'quiz', 'ending'];

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  const resetToWelcome = () => {
    setCurrentSection('welcome');
    setShowSurprise(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-soft">
      {/* Floating Background Animations */}
      {!(currentSection === 'surprise' && showSurprise) && (
        <FloatingAnimations />
      )}
      
      {/* Background Music Controls */}
      <BackgroundMusic />
      
      {/* Main Content */}
      <div className="relative z-10">
        {currentSection === 'welcome' && (
          <WelcomeSection onStart={() => setCurrentSection('photos')} />
        )}
        
        {currentSection === 'photos' && (
          <PhotoGallery onNext={goToNextSection} />
        )}
        
        {currentSection === 'messages' && (
          <BirthdayMessages onNext={goToNextSection} />
        )}
        
        {currentSection === 'surprise' && (
          <SurpriseSection 
            onNext={goToNextSection} 
            showSurprise={showSurprise}
            setShowSurprise={setShowSurprise}
          />
        )}
        
        {currentSection === 'quiz' && (
          <BirthdayQuiz onNext={goToNextSection} />
        )}
        
        {currentSection === 'ending' && (
          <EndingSection onReplay={resetToWelcome} />
        )}
      </div>
    </div>
  );
};