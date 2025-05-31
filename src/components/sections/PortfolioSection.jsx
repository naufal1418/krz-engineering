import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const portfolioItems = [
  { id: 1, category: "FDM Prints", title: "Complex Mechanical Gear", query: "Detailed FDM 3D printed mechanical gear", alt: "Grey FDM 3D printed gear with intricate teeth", src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479" },
  { id: 2, category: "Resin Prints", title: "Miniature Figurine", query: "High-detail resin 3D printed miniature figurine", alt: "Smooth white resin printed character figurine", src: "https://images.unsplash.com/photo-1604754742629-AC92dd189194" },
  { id: 3, category: "Laser-cut Steel", title: "Custom Steel Bracket", query: "Precisely laser-cut steel bracket for industrial use", alt: "Shiny laser-cut steel bracket with mounting holes", src: "https://images.unsplash.com/photo-1581092916376-0289b65e4a68" },
  { id: 4, category: "CAD Models", title: "Engine Assembly CAD", query: "Complex 3D CAD model of an engine assembly", alt: "Digital rendering of a detailed V8 engine CAD model", src: "https://images.unsplash.com/photo-1556134091-0a50f49152c7" },
  { id: 5, category: "FDM Prints", title: "Architectural Model", query: "FDM 3D printed architectural model of a modern house", alt: "White FDM printed scale model of a building", src: "https://images.unsplash.com/photo-1596431980909-bee72aderf9f" },
  { id: 6, category: "Resin Prints", title: "Jewelry Prototype", query: "Delicate resin 3D printed jewelry prototype", alt: "Intricate silver-like resin printed ring design", src: "https://images.unsplash.com/photo-1611930022073-b439ba0f1f6f" },
  { id: 7, category: "Laser-cut Steel", title: "Decorative Steel Panel", query: "Laser-cut steel panel with an artistic pattern", alt: "Ornate laser-cut steel panel for decoration", src: "https://images.unsplash.com/photo-1604578762000-43813838c994" },
  { id: 8, category: "CAD Models", title: "Robotic Arm CAD Design", query: "3D CAD model of an articulated robotic arm", alt: "Screenshot of a CAD software showing a robotic arm design", src: "https://images.unsplash.com/photo-1631007173879-871317593552" },
  { id: 9, category: "FDM Prints", title: "Functional Drone Body", query: "Lightweight FDM 3D printed drone chassis", alt: "Black FDM printed drone body frame", src: "https://images.unsplash.com/photo-1507464099403-c1736708ddac" },
  { id: 10, category: "Resin Prints", title: "Dental Molds", query: "Set of precise resin 3D printed dental molds", alt: "Peach-colored resin printed dental aligner molds", src: "https://images.unsplash.com/photo-1629104340459-56a29810ac10" },
  { id: 11, category: "Laser-cut Steel", title: "Metal Business Sign", query: "Laser-cut company logo sign in brushed steel", alt: "Elegant laser-cut steel business logo sign", src: "https://images.unsplash.com/photo-1557810043-5a790a0f0c9a" },
  { id: 12, category: "CAD Models", title: "Custom Enclosure Design", query: "CAD model for a custom electronics enclosure", alt: "3D render of a plastic enclosure for electronic components", src: "https://images.unsplash.com/photo-1593698054498-97ad7d0zzzz" },
];

const categories = ["All", "FDM Prints", "Resin Prints", "Laser-cut Steel", "CAD Models"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    const itemIndex = filteredItems.findIndex(i => i.id === item.id);
    setSelectedImage({ ...item, index: itemIndex });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300); 
  };
  
  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = selectedImage.index;
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = filteredItems.length - 1;
    if (newIndex >= filteredItems.length) newIndex = 0;
    
    setSelectedImage({ ...filteredItems[newIndex], index: newIndex });
  };


  return (
    <section id="portfolio" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-krz-primary-green mb-4">Our Portfolio</h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Showcasing a selection of our projects, demonstrating precision, innovation, and quality craftsmanship across various services.
        </p>
      </motion.div>

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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: index * 0.05, duration: 0.4 }}
              layout
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square bg-krz-light-accent-green/20"
              onClick={() => openLightbox(item)}
            >
              <img 
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt={item.alt}
                src={item.src || "https://images.unsplash.com/photo-1627398242454-45a1465c2479"} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-krz-light-accent-green">{item.category}</p>
              </div>
              <div className="absolute top-2 right-2 bg-krz-button-green/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                <ZoomIn size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-3xl w-full p-0 border-0 bg-transparent shadow-none !rounded-lg overflow-hidden">
          {selectedImage && (
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                alt={selectedImage.alt}
                src={selectedImage.src || "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3"} />
              <DialogHeader className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <DialogTitle className="text-xl font-bold text-white">{selectedImage.title}</DialogTitle>
                <DialogDescription className="text-krz-light-accent-green">{selectedImage.category}</DialogDescription>
              </DialogHeader>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 text-white bg-black/30 hover:bg-black/60 h-10 w-10"
                onClick={() => navigateLightbox(-1)}
                aria-label="Previous image"
              >
                <ArrowLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-16 text-white bg-black/30 hover:bg-black/60 h-10 w-10"
                onClick={() => navigateLightbox(1)}
                aria-label="Next image"
              >
                <ArrowRight size={24} />
              </Button>
               <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/60 h-10 w-10"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X size={24} />
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default PortfolioSection;