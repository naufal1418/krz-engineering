import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Printer, Layers, Cog, Ruler as CadRuler, Box as CubeIcon, ArrowRight } from 'lucide-react';

const serviceDetails = {
  id: "service-3d-printing",
  icon: <Printer size={48} className="text-krz-button-green" />,
  title: "3D Printing Services",
  description: "High-quality FDM and SLA 3D printing for prototypes, custom parts, miniatures, and dental applications. We work with a wide range of materials to suit your project's specific needs, ensuring precision and rapid turnaround.",
  features: [
    { icon: <Layers className="text-krz-primary-green h-5 w-5" />, text: "Technologies: FDM (Fused Deposition Modeling), SLA (Stereolithography)" },
    { icon: <CubeIcon className="text-krz-primary-green h-5 w-5" />, text: "Materials: PLA, PETG, TPU, ABS, Carbon Fibre, Flexible Resin, Standard Resin" },
    { icon: <Cog className="text-krz-primary-green h-5 w-5" />, text: "Use Cases: Rapid Prototyping, Custom Parts, Miniatures, Dental Models, Functional Components" },
    { icon: <CadRuler className="text-krz-primary-green h-5 w-5" />, text: "Max Build Volume: FDM (280x260x300mm), SLA (280x160x300mm)" },
  ],
  imageAlt: "Close-up of a 3D printer nozzle extruding filament onto a build plate",
  imageQuery: "Close-up of a 3D printer nozzle extruding filament onto a build plate"
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceDetail3DPrinting = () => {
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
                  Request a Quote for 3D Printing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-72 md:h-full min-h-[350px]">
                <img 
                  className="w-full h-full object-cover"
                  alt={serviceDetails.imageAlt}
                 src="https://images.unsplash.com/photo-1665292591084-e8524e64f918" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:bg-gradient-to-r md:from-black/5 md:via-transparent md:to-transparent"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail3DPrinting;