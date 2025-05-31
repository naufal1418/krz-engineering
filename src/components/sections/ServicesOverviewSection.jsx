import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Printer, Cpu, ScanLine, Ruler as CadRuler, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: "service-3d-printing",
    icon: <Printer size={48} className="text-krz-button-green" />,
    title: "3D Printing Services",
    shortDescription: "High-quality FDM and SLA 3D printing for prototypes, custom parts, and more.",
    link: "/#service-3d-printing",
  },
  {
    id: "service-cad-design",
    icon: <CadRuler size={48} className="text-krz-button-green" />,
    title: "CAD Design & Prototyping",
    shortDescription: "Expert CAD modeling, reverse engineering, and custom design services.",
    link: "/#service-cad-design",
  },
  {
    id: "service-cnc-machining",
    icon: <Cpu size={48} className="text-krz-button-green" />,
    title: "CNC & Lathe Machining",
    shortDescription: "Precision CNC milling and small-part lathe machining for robust components.",
    link: "/#service-cnc-machining",
  },
  {
    id: "service-laser-cutting",
    icon: <ScanLine size={48} className="text-krz-button-green" />,
    title: "Laser Cutting & Engraving",
    shortDescription: "Accurate laser cutting and detailed engraving for various materials.",
    link: "/#service-laser-cutting",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ServicesOverviewSection = () => {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, null, `/#${sectionId}`);
    }
  };

  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-krz-primary-green mb-4">Our Engineering Services</h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Explore our comprehensive suite of precision engineering services, designed to bring your projects from concept to reality with excellence. Each service is detailed below.
        </p>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicesData.map((service) => (
          <motion.div key={service.id} variants={fadeIn} className="h-full">
            <Card className="group h-full bg-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-krz-light-accent-green/50 hover:border-krz-primary-green">
              <CardHeader className="items-center text-center pt-8">
                <div className="p-4 bg-krz-light-accent-green/20 rounded-full mb-4 transition-all duration-300 group-hover:bg-krz-primary-green/10">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-krz-primary-green group-hover:text-krz-button-green transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-card-foreground mb-6 min-h-[60px]">{service.shortDescription}</CardDescription>
                <Button asChild variant="ghost" className="text-krz-button-green hover:text-krz-primary-green hover:bg-krz-light-accent-green/50">
                  <a href={service.link} onClick={(e) => handleScrollToSection(e, service.id)}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesOverviewSection;