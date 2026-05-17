import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative font-sans text-white bg-black">
        <div className="grain-overlay" />
        <div ref={cursorRef} id="cursor" className="custom-cursor hidden md:block w-5 h-5 bg-brand-neon rounded-full fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75" />
        <SmoothScroll />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}
