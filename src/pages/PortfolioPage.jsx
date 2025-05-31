import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component

// If Badge component doesn't exist, create it: src/components/ui/badge.jsx
// Example Badge component:
// import React from 'react';
// import { cva } from 'class-variance-authority';
// import { cn } from '@/lib/utils';
// const badgeVariants = cva(
//   'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
//   { variants: { variant: { default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80', secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80', destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80', outline: 'text-foreground' } }, defaultVariants: { variant: 'default' } }
// );
// function Badge({ className, variant, ...props }) {
//   return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
// }
// export { Badge, badgeVariants };


const portfolioProjects = [
  { 
    id: 1, 
    title: "Project Alpha: Custom Drone Chassis", 
    category: "FDM Prints", 
    date: "2025-03-15",
    description: "Designed and manufactured a lightweight, durable drone chassis using FDM 3D printing with carbon-fiber reinforced PLA. The project involved iterative design based on aerodynamic simulations and stress analysis to optimize for flight performance and impact resistance. Multiple prototypes were created to test component fitting and structural integrity.",
    technologies: ["FDM 3D Printing", "CAD Design (SolidWorks)", "FEA Analysis"],
    materials: ["Carbon Fiber PLA", "TPU (for landing gear)"],
    images: [
      { id: '1a', src: "https://images.unsplash.com/photo-1507464099403-c1736708ddac", alt: "Main view of the custom FDM printed drone chassis", query: "Custom FDM 3D printed drone body" },
      { id: '1b', src: "https://images.unsplash.com/photo-1587490087611-2a76779a09f6", alt: "Close-up of the drone's motor mount", query: "Close-up drone motor mount 3d print" },
      { id: '1c', src: "https://images.unsplash.com/photo-1611250047130-89f07f70d0d5", alt: "Drone chassis during assembly", query: "3D printed drone assembly process" },
    ],
    mainImageIndex: 0,
  },
  { 
    id: 2, 
    title: "Project Beta: High-Detail Miniatures", 
    category: "Resin Prints", 
    date: "2025-04-22",
    description: "Produced a series of intricate fantasy miniatures for a tabletop game client using SLA resin 3D printing. The focus was on achieving extremely fine details and smooth surfaces suitable for painting. Supported structures were carefully designed to minimize post-processing.",
    technologies: ["SLA 3D Printing", "Digital Sculpting (ZBrush)"],
    materials: ["High-Detail Grey Resin"],
    images: [
      { id: '2a', src: "https://images.unsplash.com/photo-1604754742629-AC92dd189194", alt: "Group shot of resin printed fantasy miniatures", query: "Collection of resin 3D printed miniatures" },
      { id: '2b', src: "https://images.unsplash.com/photo-1610889187385-c240d5e6a8c6", alt: "Close-up of a single detailed miniature", query: "Detailed close up of one resin miniature" },
    ],
    mainImageIndex: 0,
  },
  { 
    id: 3, 
    title: "Project Gamma: Industrial Steel Brackets", 
    category: "Laser-cut Steel", 
    date: "2025-01-10",
    description: "Fabricated a batch of custom heavy-duty steel brackets for an industrial client. The project required precise laser cutting from 5mm thick stainless steel sheets, followed by bending and welding according to engineering specifications. Quality control included dimensional checks and weld integrity testing.",
    technologies: ["Laser Cutting", "Metal Bending", "Welding"],
    materials: ["Stainless Steel (304 Grade)"],
    images: [
      { id: '3a', src: "https://images.unsplash.com/photo-1581092916376-0289b65e4a68", alt: "Stack of freshly laser-cut steel brackets", query: "Laser cut stainless steel brackets" },
      { id: '3b', src: "https://images.unsplash.com/photo-1567099130010-d01531693939", alt: "Welder working on assembling the brackets", query: "Welding steel brackets" },
    ],
    mainImageIndex: 0,
  },
   { 
    id: 4, 
    title: "Project Delta: Engine Assembly CAD Model", 
    category: "CAD Models", 
    date: "2025-02-05",
    description: "Developed a highly detailed 3D CAD model of a V8 engine assembly for a client in the automotive R&D sector. The model included all major components and was used for visualization, interference checking, and as a basis for CFD analysis. Delivered in STEP and SolidWorks native formats.",
    technologies: ["CAD Design (SolidWorks)", "Reverse Engineering (Partial)"],
    materials: ["N/A (Digital Asset)"],
    images: [
      { id: '4a', src: "https://images.unsplash.com/photo-1556134091-0a50f49152c7", alt: "Rendered image of the V8 engine CAD model", query: "Detailed V8 engine CAD model render" },
      { id: '4b', src: "https://images.unsplash.com/photo-1618063600182-4c809a7f3941", alt: "Cross-section view of the engine CAD model", query: "Engine CAD model cross section" },
      { id: '4c', src: "https://images.unsplash.com/photo-1593698054498-97ad7d0zzzz", alt: "Exploded view of the engine components in CAD", query: "Exploded view engine CAD assembly" },
    ],
    mainImageIndex: 0,
  },
  // Add more projects as needed
];

const categories = ["All", ...new Set(portfolioProjects.map(p => p.category))];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(item => item.category === selectedCategory);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(project.mainImageIndex || 0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };
  
  const navigateLightboxImage = (direction) => {
    if (!selectedProject) return;
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < selectedProject.images.length) {
      setCurrentImageIndex(newIndex);
    } else if (newIndex < 0) {
      setCurrentImageIndex(selectedProject.images.length - 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <div className="pt-8 md:pt-12 pb-16">
      <motion.section 
        className="relative py-20 md:py-28 bg-gradient-to-r from-krz-primary-green to-krz-button-green text-white text-center"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration: 0.5}}
      >
         <div className="absolute inset-0 z-0 overflow-hidden">
            <img  
              className="w-full h-full object-cover opacity-20" 
              alt="Collage of various engineering project images" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
            variants={fadeIn} initial="initial" animate="animate"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-krz-light-accent-green"
            variants={fadeIn} initial="initial" animate="animate" style={{ transitionDelay: '0.2s' }}
          >
            Showcasing our expertise in transforming ideas into reality through precision engineering.
          </motion.p>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category ? 'bg-krz-button-green text-white hover:bg-krz-primary-green' : 'text-krz-primary-green border-krz-primary-green hover:bg-krz-light-accent-green/50 hover:text-krz-button-green'}
                transition-all duration-300 rounded-full px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: index * 0.05, duration: 0.4 }}
                layout
                className="group bg-card rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col h-full border border-krz-light-accent-green/30 hover:border-krz-primary-green transition-all"
                onClick={() => openLightbox(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                   <img 
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt={project.images[project.mainImageIndex]?.alt || project.title}
                    src={project.images[project.mainImageIndex]?.src || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-krz-button-green/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn size={20} />
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-krz-primary-green mb-2 group-hover:text-krz-button-green transition-colors">{project.title}</h3>
                  <Badge variant="secondary" className="mb-3 self-start bg-krz-light-accent-green/50 text-krz-primary-green">{project.category}</Badge>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">{project.description}</p>
                  <Button variant="link" className="p-0 h-auto text-krz-button-green self-start font-semibold">
                    View Project Details <ExternalLink size={16} className="ml-2"/>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
        <DialogContent className="max-w-4xl w-[95vw] md:w-full p-0 border-0 bg-card shadow-2xl !rounded-lg overflow-hidden">
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="md:w-1/2 relative bg-black/5">
                <img 
                  className="w-full h-[300px] md:h-full object-contain"
                  alt={selectedProject.images[currentImageIndex].alt}
                  src={selectedProject.images[currentImageIndex].src || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} 
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 h-10 w-10 rounded-full"
                      onClick={() => navigateLightboxImage(-1)}
                      aria-label="Previous image"
                    >
                      <ArrowLeft size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 h-10 w-10 rounded-full"
                      onClick={() => navigateLightboxImage(1)}
                      aria-label="Next image"
                    >
                      <ArrowRight size={24} />
                    </Button>
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-krz-primary-green">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Category: {selectedProject.category} | Date: {new Date(selectedProject.date).toLocaleDateString()}
                  </DialogDescription>
                </DialogHeader>
                <div className="prose prose-sm max-w-none text-card-foreground">
                  <p className="mb-4">{selectedProject.description}</p>
                  
                  <h4 className="font-semibold text-krz-primary-green mt-4 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map(tech => <Badge key={tech} variant="outline" className="border-krz-primary-green text-krz-primary-green">{tech}</Badge>)}
                  </div>
                  
                  <h4 className="font-semibold text-krz-primary-green mt-4 mb-2">Materials:</h4>
                   <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map(mat => <Badge key={mat} variant="secondary" className="bg-krz-light-accent-green/50 text-krz-primary-green">{mat}</Badge>)}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 text-muted-foreground hover:text-destructive bg-card hover:bg-destructive/10 h-8 w-8 rounded-full z-10"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X size={20} />
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default PortfolioPage;