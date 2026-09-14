import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Users, Globe, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Taught", value: "888" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Globe, label: "Countries", value: "15+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" }
  ];


  return (
    <section id="about" className="py-20 bg-muted/30 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#FFA500' }}>
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At TELC Kota Damansara – English Comes Alive, we offer immersive experiences and interactive classes within a student-centred learning atmosphere designed to enrich every learner's journey. We empower our students to express their ideas clearly, communicate effectively, and speak with confidence, building strong English skills for academic, professional, and personal success.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFA500' }}>Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empower individuals to unlock their full potential through English language mastery that fosters critical thinking, effective communication, and creativity.
            </p>
          </Card>
          
          <Card className="card-hover p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFA500' }}>Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering Minds through Language.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 card-hover">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Think English?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Interactive Classes</h4>
              <p className="text-muted-foreground">
                Small class sizes and engaging activities ensure personalized attention and maximum participation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Proven Results</h4>
              <p className="text-muted-foreground">
                95% of our students achieve their target English proficiency within their course duration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Ongoing Assessment</h4>
              <p className="text-muted-foreground">
                Continuous Progress monitoring to ensure you are always on track to master English.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your English Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of successful students who have transformed their lives through English fluency
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open("https://wa.me/60105909838?text=Hello!%20I'm%20ready%20to%20start%20my%20English%20learning%20journey.%20Could%20you%20help%20me%20choose%20the%20right%20course?", '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;