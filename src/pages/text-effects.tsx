import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextEffectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.text-section');

    sections?.forEach((section) => {
      const heading = section.querySelector('h2');
      const text = section.querySelector('p');

      // Heading animation
      gsap.from(heading, {
        duration: 1.5,
        opacity: 0,
        y: 100,
        skewY: 7,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Text animation
      const chars = text?.textContent?.split('') || [];
      text!.textContent = '';

      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        text?.appendChild(span);
      });

      gsap.from(text?.children, {
        duration: 1,
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
      <div ref={containerRef} className="min-h-screen bg-black text-white pt-16 px-4">
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                className="text-section min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto"
            >
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Scroll Animation {i + 1}
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
        ))}
      </div>
  );
}