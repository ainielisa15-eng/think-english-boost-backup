import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/60105909838?text=Hello%20Think%20English!%20I'm%20interested%20in%20your%20courses.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/dc1de7fc-0040-40b0-b159-f1d5a642c003.png"
                alt="Think English circular logo"
                className="h-8 w-8"
              />
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Think English
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Gallery
              </button>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <Button 
                size="icon" 
                variant="ghost" 
                className={`w-8 h-8 transition-colors duration-300 hover:bg-[#1877F2] hover:text-white ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => window.open("https://www.facebook.com/ThinkEnglishMalaysia", '_blank')}
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className={`w-8 h-8 transition-colors duration-300 hover:bg-[#E4405F] hover:text-white ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => window.open("https://www.instagram.com/thinkenglish_telc", '_blank')}
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className={`w-8 h-8 transition-colors duration-300 hover:bg-[#FF0000] hover:text-white ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => window.open("https://www.youtube.com/@ThinkEnglishMalaysia", '_blank')}
                title="Subscribe to our YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
            
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary w-full text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary w-full text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary w-full text-left"
              >
                Gallery
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="whatsapp-btn w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;