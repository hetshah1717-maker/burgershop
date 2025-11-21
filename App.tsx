import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import IngredientStory from './components/IngredientStory';
import QualitySection from './components/QualitySection';
import LocationSection from './components/LocationSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background text-primary selection:bg-accent-flame selection:text-white">
      {/* Navigation Overlay */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`font-heading font-black text-2xl tracking-tighter ${scrolled ? 'text-white' : 'text-white'}`}>
            THE FLAME GRILL
          </div>
          <button className="bg-accent-flame hover:bg-accent-flame/80 text-white px-6 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105">
            ORDER NOW
          </button>
        </div>
      </nav>

      <main className="relative">
        <HeroSection />
        <IngredientStory />
        <QualitySection />
        <LocationSection />
      </main>
      
      <footer className="bg-primary text-white py-12 text-center">
        <p className="opacity-50 text-sm">© 2024 The Flame Grill. All rights reserved. Taste the fire.</p>
      </footer>
    </div>
  );
};

export default App;