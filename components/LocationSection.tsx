import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=2000&q=80")',
          filter: 'brightness(0.3)'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        
        {/* Headline */}
        <h2 className="font-heading font-black text-5xl md:text-8xl text-white mb-12 drop-shadow-2xl tracking-tighter animate-fade-in-up">
          FIND YOUR <span className="text-accent-flame">FLAME</span>
        </h2>

        {/* Content Container */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
            
            {/* Map Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gray-800 rounded-2xl overflow-hidden relative group mb-10">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 font-mono text-sm">Interactive Map Loading...</span>
                </div>
                {/* Stylized Map Graphic (CSS) */}
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent-flame rounded-full shadow-[0_0_20px_#FF6B00] animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-accent-flame rounded-full border-2 border-white"></div>
                    {/* Roads */}
                    <div className="absolute top-0 left-1/3 w-2 h-full bg-gray-700/50 transform -skew-x-12"></div>
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-700/50 transform -skew-y-6"></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-primary font-bold text-sm">123 Sizzle Ave, Burger City</p>
                </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-12 py-5 bg-accent-flame text-white text-xl font-heading font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-[0_10px_30px_rgba(255,107,0,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,107,0,0.6)] hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                    Order Now
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;