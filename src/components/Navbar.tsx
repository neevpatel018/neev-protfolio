import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, Mail } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Background effect
      setScrolled(currentScrollPos > 20);
      
      // Visibility effect (hide on scroll down, show on scroll up)
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'py-4 bg-black/90 backdrop-blur-3xl border-b border-white/5 shadow-2xl' 
          : 'py-10 bg-transparent'
      } ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center w-full">
        <Link to="/" className="text-display text-2xl group flex items-center gap-1.5">
          <span className="font-bold tracking-tighter hover:text-brand-neon transition-colors duration-500">NEEV</span>
          <span className="w-1 h-1 bg-brand-neon rounded-full group-hover:scale-150 transition-transform duration-300" />
        </Link>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase items-center">
          {isHome ? (
            ['about', 'services', 'skills', 'work', 'contact'].map((item) => (
              item === 'work' ? (
                <Link 
                  key={item}
                  to="/gallery" 
                  className="hover:text-brand-neon transition-all duration-300 opacity-50 hover:opacity-100 relative group py-2"
                >
                  {item}
                </Link>
              ) : (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="hover:text-brand-neon transition-all duration-300 opacity-50 hover:opacity-100 relative group py-2"
                >
                  {item}
                </a>
              )
            ))
          ) : (
            <>
              <Link to="/" className="opacity-50 hover:opacity-100 hover:text-brand-neon transition-all">Home</Link>
              <Link to="/gallery" className="text-brand-neon">Gallery</Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://calendly.com/nexagen2105" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[9px] font-black tracking-[0.15em] uppercase bg-brand-neon text-black px-6 py-3 rounded-full hover:scale-105 transition-all duration-500 shadow-[0_5px_15px_rgba(163,255,0,0.2)]"
          >
            <Calendar className="w-3 h-3" />
            Book a Meeting
          </a>
          
          <a href="mailto:nexagen2105@gmail.com" className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 hover:border-brand-neon hover:text-brand-neon transition-all duration-500">
            <Mail className="w-4 h-4" />
          </a>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-2 cursor-pointer group">
            <div className="w-full h-[1px] bg-white group-hover:bg-brand-neon transition-all" />
            <div className="w-1/2 h-[1px] bg-white group-hover:bg-brand-neon transition-all self-end" />
          </div>
        </div>
      </div>
    </nav>
  );
}
