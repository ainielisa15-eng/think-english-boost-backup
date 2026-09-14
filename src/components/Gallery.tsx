import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery data with real photos from Think English centre
const galleryItems = [
  // Centre Building Photo
  {
    id: 0,
    src: "/gallery-centre-hallway.png",
    alt: "Think English Language Centre hallway with 'Your Path to Success Starts Here' sign and international flags",
    category: "Centre Photos",
    title: "Your Path to Success Starts Here"
  },
  {
    id: 1,
    src: "/lovable-uploads/380e33ba-a923-4599-a7e3-c95420fd528e.png",
    alt: "Adult learners practicing conversation and problem-solving in a relaxed classroom",
    category: "Adults",
    title: "Converse Club — Adults"
  },
  {
    id: 2,
    src: "/lovable-uploads/d87ef778-bc88-4131-ac9a-38aba724513a.png",
    alt: "Adults engaged in an interactive discussion during class",
    category: "Adults",
    title: "Intensive General English Long Term and Short Term"
  },
  {
    id: 3,
    src: "/lovable-uploads/75a4dab0-9a99-4697-89e7-18d64fbc56e0.png",
    alt: "Smiling young learners flashing peace signs during Holiday Programme activity in class",
    category: "Young Learners",
    title: "Holiday Programme Smiles"
  },
  {
    id: 4,
    src: "/lovable-uploads/9a98c940-c923-4b1d-ab69-e2a58dd473e7.png",
    alt: "Kids playing a lively board game together, building vocabulary and teamwork",
    category: "Young Learners",
    title: "Board Game Challenge"
  },
  {
    id: 5,
    src: "/lovable-uploads/d3d361d0-73ac-4f41-8265-eeaa308fbef3.png",
    alt: "Young learners threading colourful beads during a focused craft activity",
    category: "Young Learners",
    title: "Beading & Focus"
  },
  {
    id: 6,
    src: "/lovable-uploads/2c11129b-4058-43a0-b97b-786b71dfdd7f.png",
    alt: "Primary student drawing with crayons during a creative English activity",
    category: "Young Learners",
    title: "Creative Time"
  },
  {
    id: 7,
    src: "/lovable-uploads/a25e1f1d-faff-41ae-896b-4ad9dbbcaf3e.png",
    alt: "Students and teachers posing in front of the Think English logo at the centre",
    category: "Centre Photos",
    title: "Our Community at Think English"
  },
  {
    id: 8,
    src: "/lovable-uploads/2cd69494-6727-4d26-9375-319be6da0abf.png",
    alt: "Proud students with certificates in front of the Think English logo",
    category: "Centre Photos",
    title: "Achievements at Think English"
  },
  {
    id: 9,
    src: "/lovable-uploads/8eb3edf4-fd50-4532-8169-86a57d27568e.png",
    alt: "Adult learners collaborating on IELTS worksheet practice",
    category: "Adults",
    title: "IELTS Practice Session"
  },
  // Centre Photos
  {
    id: 10,
    src: "/lovable-uploads/da3967a7-0b54-47c9-b3c3-10a3f0af28e5.png",
    alt: "Comfortable lounge area with modern seating and educational displays at Think English centre",
    category: "Centre Photos",
    title: "Student Lounge Area"
  },
  {
    id: 11,
    src: "/lovable-uploads/40df547d-2559-4e48-91c5-c211577f7ab3.png",
    alt: "Inspirational wall display with 'Empower Your Thoughts, Elevate your English' message",
    category: "Centre Photos",
    title: "Motivational Wall"
  },
  {
    id: 12,
    src: "/lovable-uploads/5d69a7e5-4d48-4c06-a378-ef47d4c2c675.png",
    alt: "Modern classroom with projector and student desks ready for interactive learning",
    category: "Centre Photos",
    title: "Interactive Classroom"
  },
  {
    id: 13,
    src: "/lovable-uploads/2bc02997-8288-42dd-a67a-139451f62bf1.png",
    alt: "Welcoming reception area with professional service desk and comfortable seating",
    category: "Centre Photos",
    title: "Reception Area"
  },
  // Young Learners
  {
    id: 14,
    src: "/lovable-uploads/c82d4283-f16e-400b-8a04-b1d63ebc4c35.png",
    alt: "Young student concentrating on colourful art project during creative English activity",
    category: "Young Learners",
    title: "Art & Creativity"
  },
  {
    id: 15,
    src: "/lovable-uploads/0cc0577c-e8fa-4ae7-8fe4-6504e436ace7.png",
    alt: "Young learner focused on painting activity with watercolours and brushes",
    category: "Young Learners",
    title: "Watercolour Workshop"
  },
  {
    id: 16,
    src: "/lovable-uploads/9e930b32-3962-453d-a204-753df3167561.png",
    alt: "Student carefully painting a flower design during hands-on learning activity",
    category: "Young Learners",
    title: "Flower Art Project"
  },
  {
    id: 17,
    src: "/lovable-uploads/5b32978c-3fae-42b3-b15e-a8fb526b9b7b.png",
    alt: "Young artist working on detailed flower painting with concentration and skill",
    category: "Young Learners",
    title: "Detailed Art Work"
  },
  {
    id: 18,
    src: "/lovable-uploads/4307ff8c-5821-43ed-a02f-de08aaa445aa.png",
    alt: "Happy young students enjoying ice cream during educational outing",
    category: "Young Learners",
    title: "Sweet Learning Moments"
  },
  {
    id: 19,
    src: "/lovable-uploads/2370ba0d-4652-4bfd-b5d7-3d98006b127e.png",
    alt: "Excited student playing Jenga game while practicing English in fun learning environment",
    category: "Young Learners",
    title: "Game-Based Learning"
  },
  // Additional Adults photos
  {
    id: 20,
    src: "/lovable-uploads/e2650d67-1023-4d8f-be22-945cad81c1e4.png",
    alt: "Group of Think English students and teachers enjoying team building activity at escape room",
    category: "Adults",
    title: "Team Building Adventure"
  },
  {
    id: 21,
    src: "/lovable-uploads/c1bec4da-0da1-493e-9c9f-59506beb82fe.png",
    alt: "Happy adult students giving thumbs up in front of Think English logo after successful class",
    category: "Adults",
    title: "Success Stories"
  },
  {
    id: 22,
    src: "/lovable-uploads/19d4c9df-bd60-4626-8185-2508e8e81443.png",
    alt: "Think English team and students posing together for group photo during special event",
    category: "Adults",
    title: "Community Gathering"
  },
  {
    id: 23,
    src: "/lovable-uploads/2d1af1bc-a7f7-45a7-bb83-5c2b5694fae3.png",
    alt: "Adult learners focused on collaborative learning exercise with study materials",
    category: "Adults",
    title: "Collaborative Learning"
  },
  {
    id: 24,
    src: "/lovable-uploads/8a8dd206-fc23-4ccc-a2c8-6ad7e4538597.png",
    alt: "Students participating in team building exercise with linked hands showing unity",
    category: "Adults",
    title: "Unity & Teamwork"
  },
  {
    id: 25,
    src: "/lovable-uploads/36e05c9f-9079-420b-88ac-3cd59d1d711d.png",
    alt: "Adult students and instructors smiling during group activity at entertainment venue",
    category: "Adults",
    title: "Learning Through Fun"
  },
  {
    id: 26,
    src: "/lovable-uploads/9191fc01-2d68-4e01-b42f-f82ff202c0ec.png",
    alt: "Adult learners working together on interactive learning materials and exercises",
    category: "Adults",
    title: "Interactive Study Session"
  },
  {
    id: 27,
    src: "/lovable-uploads/3273daab-be94-4a7e-98cd-46f967db6528.png",
    alt: "Teacher demonstrating lesson to engaged students in bright classroom environment",
    category: "Adults",
    title: "Engaging Classroom"
  },
  {
    id: 28,
    src: "/lovable-uploads/10cac839-f609-4950-8fc2-3d077c0838b1.png",
    alt: "Two adult students working closely together on English learning worksheets",
    category: "Adults",
    title: "Pair Study Session"
  },
  {
    id: 29,
    src: "/lovable-uploads/0846e67f-7e89-437d-854b-74d1bafa405d.png",
    alt: "Adult students and teacher in modern classroom with whiteboard during active lesson",
    category: "Adults",
    title: "Modern Classroom Learning"
  },
  {
    id: 30,
    src: "/lovable-uploads/0d74b277-c49f-48e4-bb58-98c49771dd21.png",
    alt: "Two adult male students engaged in focused English learning session with textbooks",
    category: "Adults",
    title: "Focused Study Partners"
  },
  {
    id: 31,
    src: "/lovable-uploads/f0f3d64d-6333-45eb-ad70-dd9640ae4be8.png",
    alt: "Diverse group of adult students collaborating on assignments in bright modern classroom",
    category: "Adults",
    title: "Collaborative Classroom"
  },
  {
    id: 32,
    src: "/lovable-uploads/6a44a653-901d-4851-ac53-5fabad190a19.png",
    alt: "Young adult student concentrating on written exercises during English class",
    category: "Adults",
    title: "Concentrated Learning"
  },
  {
    id: 33,
    src: "/gallery-in-class.jpg",
    alt: "Students actively participating in an engaging classroom session",
    category: "Adults",
    title: "Interactive Classroom Session"
  },
  {
    id: 34,
    src: "/gallery-diversity.jpg",
    alt: "Diverse group of international students learning together",
    category: "Adults",
    title: "Global Learning Community"
  },
  {
    id: 35,
    src: "/gallery-diversity-2.jpg",
    alt: "Multicultural students collaborating and sharing ideas",
    category: "Adults",
    title: "Cultural Exchange"
  },
  {
    id: 36,
    src: "/gallery-native-speaker.jpg",
    alt: "Native English speaker instructor guiding students",
    category: "Our Teachers",
    title: "Native Speaker Guidance"
  },
  {
    id: 37,
    src: "/gallery-native-speaker-2.jpg",
    alt: "Expert native speaker leading conversation practice",
    category: "Our Teachers",
    title: "Conversation with Native Speaker"
  },
  {
    id: 41,
    src: "/gallery-teacher-1.png",
    alt: "Think English teacher in professional attire",
    category: "Our Teachers",
    title: "Our Dedicated Teacher"
  },
  {
    id: 42,
    src: "/gallery-teacher-2.png",
    alt: "Think English teacher at Empower education event",
    category: "Our Teachers",
    title: "Empowering Education"
  },
  {
    id: 38,
    src: "/gallery-student-1.jpg",
    alt: "Students collaborating on English exercises",
    category: "Adults",
    title: "Collaborative Learning"
  },
  {
    id: 39,
    src: "/gallery-student-2.jpg",
    alt: "Adult learners engaged in group discussion",
    category: "Adults",
    title: "Group Discussion Session"
  },
  {
    id: 40,
    src: "/gallery-student-3.jpg",
    alt: "Students studying together in classroom",
    category: "Adults",
    title: "Focused Study Partners"
  }
];

const categories = ["All", "Adults", "Young Learners", "Our Teachers", "Centre Photos"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Glimpse of Class in Action at Think English Language Centre.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "orange" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden cursor-pointer card-hover"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full transition-transform duration-300 group-hover:scale-105 ${
                    item.category === "Our Teachers" 
                      ? "h-64 object-contain bg-muted" 
                      : "h-48 object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="duration-label text-xs">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative">
                <img 
                  src={filteredItems[currentImage]?.src} 
                  alt={filteredItems[currentImage]?.alt}
                  loading="lazy"
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-center text-white">
                    <Badge variant="outline" className="duration-label mb-2">
                      {filteredItems[currentImage]?.category}
                    </Badge>
                    <h3 className="text-lg font-semibold">
                      {filteredItems[currentImage]?.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {currentImage + 1} of {filteredItems.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to be part of our vibrant learning community?
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/60105909838?text=Hello!%20I'd%20like%20to%20visit%20Think%20English%20and%20see%20the%20learning%20environment.", '_blank')}
            className="whatsapp-btn"
          >
            Visit Our Centre
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;