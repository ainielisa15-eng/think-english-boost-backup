import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Courses from "@/components/Courses";
import StudentFeedback from "@/components/StudentFeedback";
import Events from "@/components/Events";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <Events />
        <About />
        <StudentFeedback />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
