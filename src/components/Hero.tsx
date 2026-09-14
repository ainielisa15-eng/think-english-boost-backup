
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/60105909838";
  const videoUrl = "/hero-classroom.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#002147]">
      {/* Oxford Blue Background */}
      <div className="absolute inset-0 z-0 bg-[#002147]"></div>

      {/* Floating Animated Elements */}
      <div className="floating-elements">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
        <div className="floating-shape floating-shape-4"></div>
        <div className="floating-shape floating-shape-5"></div>
        <div className="floating-shape floating-shape-6"></div>
        <div className="floating-shape floating-shape-7"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            ELEVATE YOUR
            <span className="block" style={{ color: '#FFA500' }}>ENGLISH</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 animate-slide-up">
            EMPOWER YOUR THOUGHTS
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 animate-slide-up">
            Embark on your English learning journey and open doors to new horizons.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <CheckCircle className="w-5 h-5" style={{ color: '#FFA500' }} />
            <span>Certified Teachers</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <CheckCircle className="w-5 h-5" style={{ color: '#FFA500' }} />
            <span>Proven Results</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <CheckCircle className="w-5 h-5" style={{ color: '#FFA500' }} />
            <span>Student-centred Approach</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg"
            className="whatsapp-btn text-lg px-8 py-4 h-auto"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Start Learning Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
          </Button>
        </div>
      </div>


      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[50px] h-[50px] rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
