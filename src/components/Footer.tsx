
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/60105909838";
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-2">Think English</h3>
              <p className="text-sm text-white/60 mb-4">Registration No.: 1521306-D</p>
              <p className="text-white/80 mb-6 leading-relaxed">
                Elevate your English, empower your thoughts. Join thousands of students who have transformed their lives through our interactive English programmes.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-white hover:bg-[#1877F2] hover:text-white transition-colors duration-300 w-10 h-10"
                  onClick={() => window.open("https://www.facebook.com/ThinkEnglishMalaysia", '_blank')}
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-white hover:bg-[#E4405F] hover:text-white transition-colors duration-300 w-10 h-10"
                  onClick={() => window.open("https://www.instagram.com/thinkenglish_telc", '_blank')}
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-white hover:bg-[#FF0000] hover:text-white transition-colors duration-300 w-10 h-10"
                  onClick={() => window.open("https://www.youtube.com/@ThinkEnglishMalaysia", '_blank')}
                  title="Subscribe to our YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">OUR MISSION AND VISION</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('events')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div id="contact">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" style={{ color: '#FFA500' }} />
                  <a href="tel:+60105909838" className="text-white/80 hover:text-white transition-colors" aria-label="Call us">
                    +6010 590 9838
                  </a>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#FFA500' }} />
                  <a 
                    href="mailto:admin@thinkenglishlanguagecentre.net" 
                    className="text-white/80 hover:text-white transition-colors break-words whitespace-normal" 
                    aria-label="Email us"
                  >
                    admin@thinkenglishlanguagecentre.net
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-14 h-14" style={{ color: '#FFA500' }} />
                  <a
                    href="https://maps.app.goo.gl/SyGoUYSrN2Y8iPgx6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Open address in Google Maps"
                  >
                    <div>Think English Language Centre – Cova Square</div>
                    <div className="ml-1">L1-03A, Cova Square, Jalan Teknologi, Taman Sains, Kota Damansara, 47810, Selangor</div>
                  </a>
                </div>
              </div>
              
              <Button 
                className="mt-4 whatsapp-btn"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Newsletter */}
            <div className="lg:ml-8 xl:ml-12">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-white/80 mb-4">
                Get the latest updates and promotions on courses and events.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button 
                  className="w-full"
                  style={{ backgroundColor: '#FFA500', color: 'white' }}
                  onClick={() => window.open("https://wa.me/60105909838?text=Hello!%20I'd%20like%20to%20subscribe%20to%20your%20newsletter%20and%20updates.", '_blank')}
                >
                  Subscribe via WhatsApp
                </Button>
              </div>
              
              {/* Operating Hours */}
              <div className="mt-6">
                <h5 className="font-medium mb-2">Walk-ins Welcome</h5>
                <div className="text-sm text-white/80">
                  <div className="flex items-start gap-2 mb-1">
                    <Clock className="w-4 h-4 mt-0.5" style={{ color: '#FFA500' }} />
                    <span>Operation Hours:</span>
                  </div>
                  <div className="ml-6">
                    <div>Monday - Thursday: 9:00 AM - 4:00 PM</div>
                    <div>Friday: 9:00 AM - 12:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Think English Language Centre. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
        
        {/* Company Registration */}
        <div className="border-t border-white/10 py-4">
          <div className="text-center">
            <p className="text-white/60 text-xs">
              Company Registration Number: 1521306 – D
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
