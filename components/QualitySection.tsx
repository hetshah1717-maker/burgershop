import React, { useEffect, useRef, useState } from 'react';

interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay: string;
}

const Card: React.FC<CardProps & { isVisible: boolean }> = ({ title, desc, icon, delay, isVisible }) => (
  <div 
    className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-2xl
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    style={{ transitionDelay: delay }}
  >
    <div className="w-16 h-16 bg-primary/5 text-accent-flame rounded-full flex items-center justify-center mb-6 text-3xl">
      {icon}
    </div>
    <h3 className="text-2xl font-heading font-bold text-primary mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const QualitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Farm Fresh",
      desc: "Sourced from local, sustainable farms. We know our farmers by name and quality by sight.",
      icon: "🌱",
      delay: "0ms"
    },
    {
      title: "Hand-Pressed",
      desc: "Patties are never frozen, always hand-formed with care to ensure the perfect texture.",
      icon: "🤲",
      delay: "200ms"
    },
    {
      title: "Artisan Buns",
      desc: "Baked in-house every morning using traditional techniques for that pillowy softness.",
      icon: "🥖",
      delay: "400ms"
    },
    {
      title: "Perfectly Paired",
      desc: "A curated selection of craft beers and hand-spun shakes to complement every bite.",
      icon: "🍺",
      delay: "600ms"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mb-4">QUALITY COMMITMENT</h2>
          <div className="w-24 h-2 bg-accent-flame mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;