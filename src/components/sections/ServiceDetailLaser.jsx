import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { ScanLine, Layers, Cog, Box as CubeIcon, ArrowRight } from 'lucide-react';

const serviceDetails = {
  id: "service-laser-cutting",
  icon: <ScanLine size={48} className="text-krz-button-green" />,
  title: "Laser Cutting & Engraving",
  description: "Accurate laser cutting and detailed engraving services for a variety of materials. Perfect for signage, custom panels, decorative items, part marking, and creating intricate designs with high precision.",
  features: [
    { icon: <ScanLine className="text-krz-primary-green h-5 w-5" />, text: "Precision cutting of intricate designs and complex shapes" },
    { icon: <Layers className="text-krz-primary-green h-5 w-5" />, text: "Detailed engraving for text, logos, and graphics" },
    { icon: <CubeIcon className="text-krz-primary-green h-5 w-5" />, text: "Materials: Acrylic, Wood, Plywood, MDF, Leather, Fabric, Paper, Cardboard, Plastics, Thin Steel (cutting varies by thickness and type)" },
    { icon: <Cog className="text-krz-primary-green h-5 w-5" />, text: "Applications: Signage, Stencils, Custom Enclosures, Gaskets, Architectural Models, Engraved Parts, Personalized Gifts" },
  ],
  imageAlt: "Laser beam cutting or engraving a pattern on a material sheet",
  imageQuery: "Laser beam cutting or engraving a pattern on a material sheet"
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceDetailLaser = () => {
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
                 src="https://images.unsplash.com/photo-1611289451118-f0c19236f892" />
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
                  Inquire About Laser Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailLaser;