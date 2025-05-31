import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Ruler as CadRulerIcon, Layers, Cog, Printer as PrinterIcon, ArrowRight } from 'lucide-react';

const serviceDetails = {
  id: "service-cad-design",
  icon: <CadRulerIcon size={48} className="text-krz-button-green" />,
  title: "CAD Design & Prototyping",
  description: "Expert CAD modeling, reverse engineering, and custom design services tailored for 3D printing, CNC machining, or laser cutting. Turn your concepts into production-ready digital blueprints with our skilled designers.",
  features: [
    { icon: <Layers className="text-krz-primary-green h-5 w-5" />, text: "CAD Model Development from sketches, ideas, or existing objects" },
    { icon: <Cog className="text-krz-primary-green h-5 w-5" />, text: "Reverse Engineering of existing parts for modification or replication" },
    { icon: <PrinterIcon className="text-krz-primary-green h-5 w-5" />, text: "Design for Manufacturability (DFM) for 3D print, CNC, Laser" },
    { icon: <CadRulerIcon className="text-krz-primary-green h-5 w-5" />, text: "Prototyping support and iterative design refinement" },
    { icon: <Layers className="text-krz-primary-green h-5 w-5" />, text: "2D drawing creation and technical documentation" },
  ],
  imageAlt: "Engineer working on a CAD software interface with a 3D model",
  imageQuery: "Engineer working on a CAD software interface with a 3D model"
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceDetailCAD = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, null, `/#contact`);
    }
  };

  return (
    <section id={serviceDetails.id} className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-krz-light-accent-green/50">
            <div className="grid md:grid-cols-2 items-center gap-0">
               <div className="relative h-72 md:h-full min-h-[350px] md:order-first">
                <img 
                  className="w-full h-full object-cover"
                  alt={serviceDetails.imageAlt}
                 src="https://images.unsplash.com/photo-1581091226809-1c0fee7f0b66" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:bg-gradient-to-l md:from-black/5 md:via-transparent md:to-transparent"></div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center mb-6">
                  <span className="p-3 bg-krz-light-accent-green/30 rounded-full mr-4">{serviceDetails.icon}</span>
                  <CardTitle className="text-3xl md:text-4xl text-krz-primary-green">{serviceDetails.title}</CardTitle>
                </div>
                <CardDescription className="text-foreground mb-6 text-base leading-relaxed">{serviceDetails.description}</CardDescription>
                
                <ul className="space-y-3 mb-8">
                  {serviceDetails.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1 flex-shrink-0">{feature.icon}</span>
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={handleScrollToContact} className="bg-krz-button-green hover:bg-krz-primary-green text-white">
                  Discuss Your CAD Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailCAD;