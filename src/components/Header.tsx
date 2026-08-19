import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Header({ data }: { data?: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerData = data?.header || {
    logo: "/uploads/MainLogo.png",
    ctaText: "Book a Consultation",
    ctaLink: "/services#contact",
    navLinks: [
      { name: 'Process', href: '/#process' },
      { name: 'About', href: '/#about' },
      { name: 'Value', href: '/#value' },
      { name: 'Approach', href: '/#approach' },
      { name: 'Services', href: '/services' },
      { name: 'Resources', href: '/resources' },
      { name: 'Blog', href: '/blog' },
      { name: 'Testimonials', href: '/testimonials' }
    ]
  };

  const navLinks = headerData.navLinks;

  // The header only appears when the user scrolls down, OR if they are not on the home page.
  // This creates a pure cinematic view for the initial home page load.
  const showHeader = isScrolled || location.pathname !== '/';

  return (
    <motion.header 
      initial={false}
      animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed w-full z-50 transition-colors duration-500 bg-slate-blue-900/95 backdrop-blur-md py-4 shadow-lg border-b border-slate-blue-800`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white group">
          <img src={headerData.logo} alt="Shade Tree Health Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-slate-200 hover:text-earth-green transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to={headerData.ctaLink} className="px-5 py-2.5 bg-earth-green hover:bg-earth-green-hover text-white rounded-full transition-colors font-medium">
            {headerData.ctaText}
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-blue-900 border-b border-slate-blue-800 shadow-xl py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-slate-200 py-2 border-b border-slate-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <Link to={headerData.ctaLink} onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-3 mt-2 bg-earth-green hover:bg-earth-green-hover text-white rounded-lg text-center transition-colors font-medium">
            {headerData.ctaText}
          </Link>
        </div>
      )}
    </motion.header>
  );
}
