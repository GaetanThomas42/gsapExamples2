import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/dist/Flip';

gsap.registerPlugin(Flip);

export default function FlipPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<'single' | 'grid' | 'circle'>('single');

  useEffect(() => {
    // Get the current state
    const state = Flip.getState(".flip-box");

    // Update layout classes
    const boxes = containerRef.current?.querySelectorAll('.flip-box');
    boxes?.forEach((box) => {
      box.classList.remove('single-layout', 'grid-layout', 'circle-layout');
      box.classList.add(`${layout}-layout`);
    });

    // Animate from the previous state to the current state
    Flip.from(state, {
      absolute: true,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.05,
      spin: layout === 'circle',
      scale: true,
      simple: true,
      onEnter: (elements) => 
        gsap.fromTo(elements, 
          { opacity: 0, scale: 0 }, 
          { opacity: 1, scale: 1, duration: 0.8 }
        ),
    });
  }, [layout]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      {/* Controls */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setLayout('single')}
          className={`px-4 py-2 rounded ${
            layout === 'single' 
              ? 'bg-purple-600' 
              : 'bg-purple-900 hover:bg-purple-800'
          }`}
        >
          Single
        </button>
        <button
          onClick={() => setLayout('grid')}
          className={`px-4 py-2 rounded ${
            layout === 'grid' 
              ? 'bg-purple-600' 
              : 'bg-purple-900 hover:bg-purple-800'
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setLayout('circle')}
          className={`px-4 py-2 rounded ${
            layout === 'circle' 
              ? 'bg-purple-600' 
              : 'bg-purple-900 hover:bg-purple-800'
          }`}
        >
          Circle
        </button>
      </div>

      {/* Container */}
      <div 
        ref={containerRef} 
        className="relative w-full h-[80vh] flex items-center justify-center"
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`
              flip-box absolute w-24 h-24 rounded-lg 
              bg-gradient-to-br from-purple-500 to-pink-500
              flex items-center justify-center text-2xl font-bold
              ${layout}-layout
            `}
            style={{
              ['--index' as string]: i,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}