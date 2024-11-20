import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scene from '../components/Scene';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Text reveal animations
    sectionsRef.current.forEach((section) => {
      const texts = section.querySelectorAll('.reveal-text');

      texts.forEach((text) => {
        const chars = text.textContent?.split('') || [];
        text.textContent = '';

        chars.forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(100%)';
          text.appendChild(span);
        });

        gsap.to(text.children, {
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        });
      });
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
      <div ref={containerRef} className="bg-black text-white">
        {/* Fixed Three.js Background */}
        <div className="fixed inset-0 pointer-events-none">
          <Canvas>
            <Scene scrollY={scrollY}/>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="h-screen flex items-center justify-center">
            <h1 className="reveal-text text-8xl font-bold text-center leading-tight mix-blend-difference">
              Scroll Magic
              <br/>
              <span className="text-purple-500">Unleashed</span>
            </h1>
          </div>

          {/* Text Sections */}
          <div ref={addToRefs} className="min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="reveal-text text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Smooth Interactions
              </h2>
              <p className="reveal-text text-2xl text-gray-400 leading-relaxed">
                Experience the perfect blend of smooth scrolling and dynamic animations,
                creating an immersive journey through your content.
              </p>
            </div>
          </div>

          <div ref={addToRefs} className="min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4 text-right">
              <h2 className="reveal-text text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Dynamic Movement
              </h2>
              <p className="reveal-text text-2xl text-gray-400 leading-relaxed">
                Watch as 3D elements respond to your scroll position,
                creating a seamless connection between interaction and animation.
              </p>
            </div>
          </div>

          <div ref={addToRefs} className="min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="reveal-text text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
                Endless Possibilities
              </h2>
              <p className="reveal-text text-2xl text-gray-400 leading-relaxed">
                Combine GSAP, Three.js, and Lenis for limitless creative potential
                in your web experiences.
              </p>
            </div>
          </div>

          {/* Final Section */}
          <div ref={addToRefs} className="h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="reveal-text text-8xl font-bold mb-8 mix-blend-difference">
                Start Creating
              </h2>
              <p className="reveal-text text-2xl text-gray-400 mb-12">
                Your next project awaits.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}