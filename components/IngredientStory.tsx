import React, { useEffect, useRef, useState } from 'react';

const IngredientStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // Ref for the text steps
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when element is in the middle of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === step1Ref.current) setActiveStage(1);
          if (entry.target === step2Ref.current) setActiveStage(2);
          if (entry.target === step3Ref.current) setActiveStage(3);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-background text-primary font-sans">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Column: Scrolling Text */}
        <div className="w-full md:w-1/2">
            {/* Panel 1 */}
            <div ref={step1Ref} className="h-screen flex flex-col justify-center px-8 md:px-20 transition-opacity duration-500">
                <div className={`transition-all duration-700 transform ${activeStage === 1 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">The Artisan Bun</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 border-l-4 border-accent-flame pl-6">
                        Baked fresh daily in our ovens. Golden, soft, and toasted to perfection to hold the flavor without falling apart.
                    </p>
                </div>
            </div>

            {/* Panel 2 */}
            <div ref={step2Ref} className="h-screen flex flex-col justify-center px-8 md:px-20">
                <div className={`transition-all duration-700 transform ${activeStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">The Flame-Pressed Patty</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 border-l-4 border-accent-flame pl-6">
                        100% premium Angus beef. Smashed on a scorching grill to lock in juices and create that signature crust.
                    </p>
                </div>
            </div>

            {/* Panel 3 */}
            <div ref={step3Ref} className="h-screen flex flex-col justify-center px-8 md:px-20">
                <div className={`transition-all duration-700 transform ${activeStage === 3 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">The Secret Sauce</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 border-l-4 border-accent-flame pl-6">
                        A mysterious blend of spices, aged cheddar, and our house smokey reduction. It's the soul of the burger.
                    </p>
                </div>
            </div>
        </div>

        {/* Right Column: Sticky Visualization */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-gradient-to-br from-[#e0e0e0] to-[#f5f5f5] overflow-hidden">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center perspective-1000">
                
                {/* Burger Stack Container */}
                <div className="relative w-64 h-64 transform-style-3d transition-transform duration-700">
                    
                    {/* Bun Bottom - Always visible initially but animates with stage 1 */}
                    <div className={`absolute bottom-0 w-full h-16 bg-[#f4a460] rounded-b-3xl rounded-t-md shadow-xl transition-all duration-700 ease-out border-b-4 border-[#c66c23]
                        ${activeStage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}
                    >
                        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>

                    {/* Patty - Stage 2 */}
                    <div className={`absolute bottom-14 w-[110%] -left-[5%] h-12 bg-[#3e2723] rounded-xl shadow-lg flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10
                        ${activeStage >= 2 ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-40 rotate-12'}`}
                    >
                        {/* Grill marks */}
                        <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,#000_20px,#000_24px)]"></div>
                        {/* Shine */}
                        <div className="absolute top-1 w-3/4 h-2 bg-white/10 rounded-full blur-sm"></div>
                    </div>

                    {/* Cheese/Sauce - Stage 3 */}
                    <div className={`absolute bottom-24 w-[105%] -left-[2.5%] h-12 z-20 transition-all duration-1000 ease-out
                         ${activeStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                    >
                         {/* Dripping shape */}
                         <div className="w-full h-full bg-accent-sizzle rounded-md shadow-md clip-dripping drop-shadow-lg"></div>
                    </div>

                    {/* Bun Top - Stage 1 (Comes in with bun bottom for context, or later? Let's bring it in at the end to close the burger) 
                        Actually, prompt says: 
                        1. Bun layer
                        2. Patty layer
                        3. Sauce layer
                        So let's keep the top bun invisible or floating high up until the end? 
                        The prompt doesn't explicitly ask for the top bun to close, but it looks weird without it. 
                        Let's add the Top Bun at Stage 3 as well to "Complete" the visual.
                    */}
                    <div className={`absolute bottom-28 w-full h-24 bg-[#f4a460] rounded-t-full rounded-b-sm shadow-2xl transition-all duration-700 delay-300 ease-out z-30 border-t border-[#ffcc80]
                        ${activeStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-60'}`}
                    >
                         {/* Sesame Seeds */}
                         <div className="absolute top-4 left-10 w-2 h-1 bg-[#ffe0b2] rounded-full rotate-45"></div>
                         <div className="absolute top-6 left-20 w-2 h-1 bg-[#ffe0b2] rounded-full -rotate-12"></div>
                         <div className="absolute top-10 left-32 w-2 h-1 bg-[#ffe0b2] rounded-full rotate-90"></div>
                         <div className="absolute top-5 right-12 w-2 h-1 bg-[#ffe0b2] rounded-full rotate-12"></div>
                         <div className="absolute top-8 right-24 w-2 h-1 bg-[#ffe0b2] rounded-full -rotate-45"></div>
                    </div>

                </div>

                {/* Contextual decorative elements */}
                <div className={`absolute -z-10 w-[500px] h-[500px] bg-accent-flame/10 rounded-full blur-3xl transition-all duration-1000 ${activeStage >= 2 ? 'scale-150 opacity-100' : 'scale-50 opacity-0'}`}></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientStory;