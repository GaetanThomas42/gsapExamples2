import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const isActive = (path: string) => router.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 space-x-8">
          <Link 
            href="/" 
            className={`transition ${isActive('/') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            Home
          </Link>
          <Link 
            href="/gsap" 
            className={`transition ${isActive('/gsap') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            GSAP
          </Link>
          <Link 
            href="/flip" 
            className={`transition ${isActive('/flip') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            Flip
          </Link>
          <Link 
            href="/three" 
            className={`transition ${isActive('/three') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            Three.js
          </Link>
          <Link 
            href="/parallax" 
            className={`transition ${isActive('/parallax') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            Parallax
          </Link>
          <Link 
            href="/text-effects" 
            className={`transition ${isActive('/text-effects') 
              ? 'text-purple-400 font-bold' 
              : 'text-white hover:text-purple-400'}`}
          >
            Text Effects
          </Link>
        </div>
      </div>
    </nav>
  );
}