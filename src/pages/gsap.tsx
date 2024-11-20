import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GSAPPage() {
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxes = boxesRef.current?.children;
    if (!boxes) return;

    gsap.to([...boxes], {
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: boxesRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl mb-12">GSAP Animations</h1>
      
      <div ref={boxesRef} className="grid grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform scale-0"
          />
        ))}
      </div>
    </div>
  );
}