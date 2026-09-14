import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, MessageCircle, Users } from "lucide-react";

const eventsData = [
  {
    id: "converse-club-trial",
    title: "Free Trial - Converse Club Adult",
    description: "Experience our popular Converse Club for adults led by our teachers! Join us for a free trial session and practice your English conversation skills in a supportive environment.",
    date: "2026-01-24",
    time: "7:00 PM - 9:00 PM",
    location: "Think English Main Campus",
    capacity: "20 participants",
    features: ["Free Trial", "Conversation Practice", "Adult Learners", "Friendly Environment"],
    status: "upcoming"
  },
  {
    id: "coffee-english",
    title: "Coffee & English Conversations",
    description: "Monthly casual conversation practice in a relaxed café setting. Meet fellow learners and practice speaking naturally.",
    date: "2025-07-20",
    time: "7:00 PM - 9:00 PM",
    location: "Local Partner Café",
    capacity: "25 participants",
    features: ["Casual Practice", "Topic Discussions", "Meet New Friends", "Coffee & Snacks"],
    status: "recurring"
  },
  {
    id: "english-debate",
    title: "English Debate",
    description: "Develop your critical thinking and speaking skills through structured debates on current topics. Perfect for intermediate to advanced learners.",
    date: "2025-08-15",
    time: "2:00 PM - 5:00 PM",
    location: "Think English Main Campus",
    capacity: "30 participants",
    features: ["Structured Debates", "Critical Thinking", "Public Speaking", "Team Building"],
    status: "upcoming"
  },
  {
    id: "cultural-exchange",
    title: "Cultural English Exchange",
    description: "Connect with students from different cultures and practice English while sharing cultural experiences and traditions.",
    date: "2025-09-10",
    time: "6:00 PM - 9:00 PM",
    location: "Think English Main Campus",
    capacity: "40 participants",
    features: ["Cultural Sharing", "Language Practice", "International Friends", "Traditional Food"],
    status: "upcoming"
  }
];

const Events = () => {
  const getWhatsAppUrl = (eventTitle: string, eventDate: string) => {
    return `https://wa.me/60105909838?text=Hello!%20I'd%20like%20to%20join%20"${encodeURIComponent(eventTitle)}"%20on%20${eventDate}.%20Please%20provide%20registration%20details.`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-500';
      case 'recurring':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events and activities designed to enhance your English learning experience. 
            Connect with fellow learners and practice your skills in fun, interactive environments.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {eventsData.map((event) => (
            <Card key={event.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-4 duration-label">
                    {event.status === 'recurring' ? 'Monthly' : 'Upcoming'}
                  </Badge>
                </div>
              </CardHeader>



              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.features.map((feature, index) => (
                      <Badge key={index} className="button-orange text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    className="whatsapp-btn flex-1"
                    onClick={() => window.open(getWhatsAppUrl(event.title, event.date), '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/-/g, '')}T090000/${event.date.replace(/-/g, '')}T170000&details=${encodeURIComponent(event.description)}`;
                      window.open(calendarUrl, '_blank');
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Never Miss an Event!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our WhatsApp updates to get notified about upcoming events, workshops, and special activities.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => window.open("https://wa.me/60105909838?text=Hello!%20I'd%20like%20to%20subscribe%20to%20event%20notifications%20and%20updates.", '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;