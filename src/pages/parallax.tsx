import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const layers = containerRef.current?.querySelectorAll('.parallax-layer');
    
    layers?.forEach((layer, i) => {
      const speed = 1 - (i * 0.2);
      
      gsap.to(layer, {
        y: `${-50 * speed}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="bg-black min-h-screen pt-16">
      <div ref={containerRef} className="h-[200vh] relative overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="parallax-layer absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 5 - i }}
          >
            <div 
              className="w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle, 
                  hsla(${i * 60}, 100%, 70%, 0.3),
                  hsla(${i * 60}, 100%, 50%, 0.1))`,
                transform: `scale(${1 + i * 0.5})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}