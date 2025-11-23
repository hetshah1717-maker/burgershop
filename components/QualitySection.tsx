import React, { useEffect, useRef, useState } from 'react';

const QualitySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const commitments = [
    {
      title: "Farm Fresh",
      text: "Sourced from local, sustainable farms. We know our farmers by name and quality by sight.",
      rotation: 0
    },
    {
      title: "Hand-Pressed",
      text: "Patties are never frozen, always hand-formed with care to ensure the perfect texture.",
      rotation: 90
    },
    {
      title: "Artisan Buns",
      text: "Baked in-house every morning using traditional techniques for that pillowy softness.",
      rotation: 180
    },
    {
      title: "Perfectly Paired",
      text: "A curated selection of craft beers and hand-spun shakes to complement every bite.",
      rotation: 360 // Full rotation by the end
    }
  ];

  return (
    <section className="relative w-full bg-[#1A1A1A] text-white font-sans">
        <div className="flex flex-col md:flex-row">
            {/* Left Column: Scrollable Text */}
            <div className="w-full md:w-1/2 z-10 bg-[#1A1A1A]">
                {commitments.map((item, index) => (
                    <div 
                        key={index}
                        ref={(el) => stepsRef.current[index] = el}
                        data-step={index}
                        className="h-screen flex flex-col justify-center px-8 md:px-20 border-l border-gray-800"
                    >
                        <div className={`transition-all duration-700 transform ${activeStep === index ? 'opacity-100 translate-x-0 blur-0' : 'opacity-20 -translate-x-10 blur-sm'}`}>
                            <h3 className="text-accent-flame font-heading font-bold tracking-widest uppercase mb-4 text-sm">
                                The Commitment — 0{index + 1}
                            </h3>
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white leading-tight">
                                {item.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed border-l-4 border-accent-flame pl-6">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Column: Sticky Visual */}
            <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-[#151515] overflow-hidden">
                 {/* Decorative Radial Gradient */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#151515_70%)] opacity-50"></div>
                 
                 {/* Sizzle Particles (Static decoration) */}
                 <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent-sizzle rounded-full animate-pulse opacity-50"></div>
                 <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent-flame rounded-full animate-bounce opacity-30" style={{ animationDuration: '3s' }}></div>

                 {/* Rotating Burger Container */}
                 <div className="relative w-[500px] h-[500px] perspective-1000 flex items-center justify-center">
                    {/* Ring */}
                    <div className="absolute w-[90%] h-[90%] border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-[60%] h-[60%] border border-accent-flame/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

                    {/* Burger Image with Rotation */}
                    <div 
                        className="w-full h-full relative transition-all duration-1000 ease-out transform-style-3d"
                        style={{ 
                          transform: `rotate(${commitments[activeStep].rotation}deg) scale(${activeStep === 3 ? 1.1 : 1})` 
                        }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                            alt="The Flame Grill Burger" 
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default QualitySection;