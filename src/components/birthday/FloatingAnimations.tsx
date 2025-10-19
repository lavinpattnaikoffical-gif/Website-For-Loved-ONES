import React from 'react';

export const FloatingAnimations = () => {
  return (
    <>
      {/* Floating Heart Particles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className={`absolute text-3xl animate-heart-float opacity-60`}
            style={{
              left: `${5 + i * 8}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          >
            {i % 4 === 0 ? '💕' : i % 4 === 1 ? '💖' : i % 4 === 2 ? '💝' : '💗'}
          </div>
        ))}
      </div>
      
      {/* Floating Balloons */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`balloon-${i}`}
            className={`absolute text-4xl animate-balloon opacity-50`}
            style={{
              left: `${8 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {i % 3 === 0 ? '🎈' : i % 3 === 1 ? '🎀' : '🌟'}
          </div>
        ))}
      </div>
      
      {/* Twinkling Stars */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className={`absolute text-2xl animate-twinkle`}
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      {/* Floating Teddy Bears */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`teddy-${i}`}
            className={`absolute text-4xl animate-teddy-bounce opacity-40`}
            style={{
              top: `${15 + (i * 12) % 70}%`,
              left: `${10 + (i * 15) % 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          >
            🧸
          </div>
        ))}
      </div>
      
      {/* Romantic Confetti Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className={`absolute text-lg animate-confetti`}
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {i % 5 === 0 ? '💕' : i % 5 === 1 ? '🌸' : i % 5 === 2 ? '✨' : i % 5 === 3 ? '💫' : '🎊'}
          </div>
        ))}
      </div>
      
      {/* Floating Rose Petals */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className={`absolute text-2xl animate-float opacity-50`}
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + (i % 2)}s`
            }}
          >
            🌸
          </div>
        ))}
      </div>
    </>
  );
};