import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary text-white">
      {/* Background texture/overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] to-primary opacity-80 z-0"></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Text Content */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-heading font-black text-5xl md:text-8xl tracking-tighter mb-4 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">THE FLAME</span>
            <span className="block text-accent-flame drop-shadow-[0_0_25px_rgba(255,107,0,0.5)]">GRILL</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light tracking-widest uppercase text-accent-sizzle/90 mt-6">
            The Art of the Perfect Sizzle
          </p>
        </div>

        {/* Hero Image Wrapper */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-8 group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent-flame/20 blur-[100px] rounded-full animate-pulse"></div>
            
            {/* Main Burger Image */}
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" 
              alt="Signature Burger" 
              className="relative w-full h-full object-contain animate-sizzle drop-shadow-2xl transform transition-transform duration-700 hover:scale-105"
            />

            {/* Smoke/Steam effects (simulated with CSS gradients/opacity) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-t from-white/10 to-transparent blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000 animate-float delay-100"></div>
            <div className="absolute -top-16 left-1/3 w-16 h-24 bg-gradient-to-t from-white/10 to-transparent blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-1000 animate-float delay-300"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
        <span className="text-xs uppercase tracking-widest mb-2 text-gray-400">Scroll to Taste</span>
        <svg className="w-6 h-6 text-accent-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;