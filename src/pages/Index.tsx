import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Calendar, MapPin, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function ValentinesAirbnbBooking() {
  const [searchParams] = useSearchParams();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(searchParams.get('booked') === 'yes');
  const [showNoButton, setShowNoButton] = useState(true);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);

  const moveNoButton = () => {
    setNoButtonAttempts(prev => prev + 1);
    
    // Hide the No button after 6 attempts
    if (noButtonAttempts >= 5) {
      setShowNoButton(false);
      setYesButtonSize(1.8);
      return;
    }
    
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    
    // Grow the Yes button each time
    setYesButtonSize(prev => Math.min(1.8, prev + 0.15));
  };

  const handleYesClick = () => {
    setShowSuccess(true);
    
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  useEffect(() => {
    // Add Pacifico font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full shadow-2xl border-4 border-pink-300 animate-in zoom-in duration-700">
          <CardContent className="p-12 text-center">
            <div className="mb-8 animate-bounce">
              <Heart className="w-24 h-24 mx-auto text-red-500 fill-red-500" />
            </div>
            
            <h1 className="text-5xl font-bold text-pink-600 mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              Yay! 🎉
            </h1>
            
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/934522/2026-02-04/3034c621-7015-4fb6-b12c-ab75ef9d8f39.png"
              alt="Romantic Airbnb unit"
              className="w-64 h-64 mx-auto rounded-3xl shadow-xl mb-8 object-cover"
            />
            
            <div className="mb-8">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Romantic Getaway Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-md mx-auto rounded-3xl shadow-xl"
              ></iframe>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Romantic Getaway Awaits! 💕
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Get ready for the most amazing Valentine's Day weekend at our Airbnb unit in Tsavo Roysambu!
            </p>
            
            <div className="bg-pink-50 rounded-2xl p-6 mb-8 border-2 border-pink-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-pink-600" />
                <p className="text-lg font-semibold text-gray-700">
                  February 14-16, 2026
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6 text-pink-600" />
                <p className="text-lg font-semibold text-gray-700">
                  Tsavo Roysambu
                </p>
              </div>
            </div>
            
            <div className="space-y-3 text-left bg-white rounded-xl p-6 mb-8 shadow-inner">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                What's Included: ✨
              </h3>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Hot shower
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Free parking
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Mini supermarket / shops
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Fast Wi‑Fi
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Kitchenette (fridge, microwave, utensils)
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Security (CCTV, guards)
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                Roof terrace / outdoor spaces
              </p>
            </div>
            
            <div className="mt-6 text-center bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                Contact Us for Your Romantic Escape! 💕
              </h4>
              <p className="text-gray-600 flex items-center justify-center gap-2 mb-1">
                📞 Phone: 0728357775
              </p>
              {/* <p className="text-gray-600 flex items-center justify-center gap-2">
                📧 Email: love@tsavoroysambu.com
              </p> */}
              <p className="text-sm text-pink-600 mt-2 italic">
                Ready to make memories? Give us a call! 🌹
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <Card className="max-w-2xl w-full shadow-2xl border-4 border-pink-300 relative z-10 animate-in zoom-in duration-700">
        <CardContent className="p-12 text-center">
          <h1 
            className="text-6xl font-bold text-pink-600 mb-8 animate-pulse" 
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Will You Book Our
            <br />
            Valentine's Getaway? 💕
          </h1>
          
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/934522/2026-02-04/2e705c2c-ac08-4097-84ff-e25bce041405.png"
            alt="Romantic couple"
            className="w-80 h-80 mx-auto rounded-3xl shadow-xl mb-8 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          
          <p className="text-2xl text-gray-700 mb-12 font-medium">
            A romantic cabin retreat awaits you this Valentine's Day! 
            <br />
            <span className="text-pink-600 font-bold">Will you say yes?</span>
          </p>
          
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-2xl px-16 py-8 rounded-full shadow-xl transform transition hover:scale-110 animate-bounce"
              style={{
                transform: `scale(${yesButtonSize})`,
                transition: 'all 0.3s ease'
              }}
            >
              Yes! 💖
            </Button>
            
            {showNoButton && noButtonPosition.x === 0 && (
              <Button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                size="lg"
                variant="outline"
                className="border-4 border-gray-400 text-gray-600 hover:bg-gray-100 text-2xl px-16 py-8 rounded-full shadow-xl transition-all duration-300"
              >
                No 😢
              </Button>
            )}
          </div>
          
          {showNoButton ? (
            <p className="mt-8 text-gray-500 text-sm italic">
              Psst... the "No" button is shy! 😉
            </p>
          ) : (
            <p className="mt-8 text-pink-600 text-lg font-semibold animate-pulse">
              The "No" button gave up! There's only one choice now... 💕
            </p>
          )}
        </CardContent>
      </Card>

      {/* Floating No button */}
      {showNoButton && noButtonPosition.x !== 0 && (
        <Button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          size="lg"
          variant="outline"
          className="border-4 border-gray-400 text-gray-600 hover:bg-gray-100 text-2xl px-16 py-8 rounded-full shadow-xl fixed transition-all duration-300"
          style={{
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
            zIndex: 50
          }}
        >
          No 😢
        </Button>
      )}
    </div>
  );
}