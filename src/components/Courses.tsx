import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "60105909838";
const getWhatsAppUrl = (courseName: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello! I'd love to learn more about ${courseName} at Think English. Could you share details about schedules and intakes? Thank you!`
  )}`;

const courses = [
  {
    id: "general-english-short-term",
    title: "Intensive General English Short Term (1–3 Months)",
    description:
      "Fast-track your English skills with our immersive Intensive General English short-term programme — no visa needed. Perfect for learners wanting quick, powerful results.",
    duration: "1–3 months",
    image: "/lovable-uploads/d87ef778-bc88-4131-ac9a-38aba724513a.png",
    alt: "Students practicing group conversation during Intensive General English Short Term class",
    ctaText: "Let's Chat on WhatsApp",
  },
  {
    id: "general-english-long-term",
    title: "Intensive General English Long Term (6–12 Months)",
    description:
      "Commit to your fluency goals with our comprehensive Intensive General English long-term programme. Deep learning, confident speaking, lasting results.",
    duration: "6–12 months",
    image: "/lovable-uploads/3f6792ee-0dbe-4b24-9181-e07757f7da54.png",
    alt: "Adult learners engaged in a focused lesson during Intensive General English Long Term programme",
    ctaText: "Let's Chat on WhatsApp",
  },
  {
    id: "converse-club-adults",
    title: "Converse Club – Adults",
    description:
      "Perfect your conversation skills in a relaxed, social setting — ideal for building fluency and confidence.",
    duration: "4–12 weeks",
    image: "/lovable-uploads/380e33ba-a923-4599-a7e3-c95420fd528e.png",
    alt: "Adults talking and practicing conversation in a relaxed classroom setting",
    ctaText: "Let’s Chat on WhatsApp",
  },
  {
    id: "holiday-program",
    title: "Holiday Programme",
    description:
      "Make your holidays count with fun and interactive English learning experiences.",
    duration: "2–4 weeks",
    image: "/lovable-uploads/75a4dab0-9a99-4697-89e7-18d64fbc56e0.png",
    alt: "Young learners smiling during a fun Holiday Programme activity",
    ctaText: "Let's Chat on WhatsApp",
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    description:
      "Enjoy a summer of language learning, teamwork, and unforgettable activities.",
    duration: "4–6 weeks",
    image: "/lovable-uploads/9a98c940-c923-4b1d-ab69-e2a58dd473e7.png",
    alt: "Kids and teens enjoying teamwork activities during summer camp",
    ctaText: "Let's Chat on WhatsApp",
  },
  {
    id: "ielts-prep",
    title: "IELTS Preparatory Class",
    description:
      "Prepare for IELTS with proven strategies, mock tests, and expert guidance to achieve your target score.",
    duration: "8 weeks",
    image: "/lovable-uploads/8eb3edf4-fd50-4532-8169-86a57d27568e.png",
    alt: "Students preparing for IELTS with practice tests and notes",
    ctaText: "Let’s Chat on WhatsApp",
  },
] as const;

const Courses = () => {
  return (
    <section id="courses" aria-labelledby="courses-heading" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 id="courses-heading" className="text-4xl sm:text-5xl font-extrabold text-primary mb-6">
            Courses We Offer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Friendly, encouraging programmes designed to build confidence and real-world skills at your pace.
          </p>
        </header>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} role="article" aria-labelledby={`${course.id}-title`} className="card-hover overflow-hidden rounded-2xl bg-card group flex flex-col h-full">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="duration-label font-semibold shadow-sm">
                    {course.duration}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardHeader className="space-y-3 flex-1">
                <CardTitle id={`${course.id}-title`} className="text-2xl leading-tight text-primary font-extrabold">
                  {course.title}
                </CardTitle>
                <p className="text-base text-muted-foreground">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="mt-auto">
                <Button asChild className="whatsapp-btn w-full">
                  <a
                    href={getWhatsAppUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${course.ctaText} about ${course.title}`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    {course.ctaText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;