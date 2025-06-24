import { useState, useEffect } from 'react';
import LogoFadel from "../../assets/Logo_Fadel_Karnen-removebg-preview.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About me', href: '#about' },
    { name: 'Master of Ceremony', href: '#moc' },
    { name: 'SPEAKLAH', href: '#speaklah' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/0'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={LogoFadel} 
                alt="Logo" 
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-black hover:text-black-600 hover:font-aeonikbold font-aeonikregular text-lg transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full scroll-smooth"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Hire Me Button - Desktop */}
          <div className="hidden md:block ml-auto">
            <button className="font-bold underline text-gray-800 hover:text-blue-600 transition-all hover:-translate-y-0.5">
          HIRE ME
        </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className={`h-5 w-6 relative transition-all duration-300 ${mobileMenuOpen ? 'transform rotate-180' : ''}`}>
                <span className={`absolute block h-0.5 w-full bg-current rounded transition-all duration-300 top-0 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute block h-0.5 w-full bg-current rounded transition-all duration-300 top-2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-full bg-current rounded transition-all duration-300 top-4 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <div className="h-5 w-6 relative">
              <span className="absolute block h-0.5 w-full bg-gray-800 rounded transform rotate-45 translate-y-2"></span>
              <span className="absolute block h-0.5 w-full bg-gray-800 rounded transform -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-[-4px] after:left-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-xl mt-8 transition-all duration-300 hover:-translate-y-0.5">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

