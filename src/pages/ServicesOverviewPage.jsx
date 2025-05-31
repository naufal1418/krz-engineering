import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Printer, Cpu, ScanLine, Ruler as CadRuler, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { servicePaths } from '@/config/paths'; // Corrected import

const servicesData = [
  {
    id: "3d-printing",
    icon: <Printer size={48} className="text-krz-button-green" />,
    title: "3D Printing Services",
    shortDescription: "Advanced FDM and SLA 3D printing for rapid prototypes, custom parts, and intricate designs. We offer a wide range of materials to meet your specific functional and aesthetic requirements.",
    link: servicePaths['3d-printing'],
    imageQuery: "Various colorful 3D printed objects on a workshop table",
    alt: "Collection of diverse 3D printed items showcasing material and color options"
  },
  {
    id: "cad-design",
    icon: <CadRuler size={48} className="text-krz-button-green" />,
    title: "CAD Design & Prototyping",
    shortDescription: "Comprehensive CAD modeling, reverse engineering, and design optimization services. We bridge the gap between concept and production-ready digital blueprints.",
    link: servicePaths['cad-design'],
    imageQuery: "Engineer's desk with CAD software on screen and calipers",
    alt: "CAD design workstation with 3D model on screen and precision tools"
  },
  {
    id: "cnc-machining",
    icon: <Cpu size={48} className="text-krz-button-green" />,
    title: "CNC & Lathe Machining",
    shortDescription: "Precision CNC milling and lathe services for robust metal and plastic components. Ideal for functional parts, custom tooling, and high-tolerance applications.",
    link: servicePaths['cnc-machining'],
    imageQuery: "CNC machine cutting a metal part with sparks flying",
    alt: "CNC machine actively cutting a piece of metal with precision"
  },
  {
    id: "laser-cutting",
    icon: <ScanLine size={48} className="text-krz-button-green" />,
    title: "Laser Cutting & Engraving",
    shortDescription: "Accurate laser cutting and intricate engraving for diverse materials including steel, plastics, and wood. Perfect for signage, custom panels, and detailed artwork.",
    link: servicePaths['laser-cutting'],
    imageQuery: "Laser cutter in action engraving a detailed pattern on wood",
    alt: "Laser beam precisely engraving a complex design onto a wooden surface"
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

const ServicesOverviewPage = () => {
  return (
    <div className="pt-8 md:pt-12 pb-16">
      {/* Page Header */}
      <motion.section 
        className="relative py-20 md:py-28 bg-gradient-to-r from-krz-primary-green to-krz-button-green text-white text-center"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration: 0.5}}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img  
              className="w-full h-full object-cover opacity-20" 
              alt="Grid of various engineering tools and components" src="https://images.unsplash.com/photo-1632496497047-706290273235" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Our Engineering Services
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-krz-light-accent-green"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.2s' }}
          >
            Precision solutions tailored to your project's unique needs. Explore our range of advanced manufacturing capabilities.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Services Grid */}
      <section id="services-grid" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
            className="text-center mb-12 md:mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            <SlidersHorizontal className="w-12 h-12 text-krz-primary-green mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">Explore Our Capabilities</h2>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
                From initial concept to final product, we offer a comprehensive suite of services to bring your visions to life with unmatched precision and quality. Click on any service to learn more about how we can assist with your specific requirements.
            </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={fadeIn} className="h-full">
              <Card className="group h-full bg-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-krz-light-accent-green/50 hover:border-krz-primary-green flex flex-col overflow-hidden">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={service.alt}
                   src="https://images.unsplash.com/photo-1665292591084-e8524e64f918" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <CardHeader className="items-start text-left pt-6">
                  <div className="flex items-center mb-3">
                    <span className="p-3 bg-krz-light-accent-green/20 rounded-full mr-3 transition-all duration-300 group-hover:bg-krz-primary-green/10">
                      {service.icon}
                    </span>
                    <CardTitle className="text-2xl text-krz-primary-green group-hover:text-krz-button-green transition-colors">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-left flex-grow flex flex-col">
                  <CardDescription className="text-card-foreground mb-6 flex-grow min-h-[70px]">{service.shortDescription}</CardDescription>
                  <Button asChild variant="default" className="mt-auto bg-krz-button-green hover:bg-krz-primary-green text-white w-full md:w-auto self-start">
                    <RouterLink to={service.link}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </RouterLink>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-krz-light-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-6"
                variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
            >
                Have a Project in Mind?
            </motion.h2>
            <motion.p 
                className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8"
                 variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount:0.2 }}
            >
                Let our expert engineers help you choose the right service and materials for your specific application. Contact us today for a personalized consultation and quote.
            </motion.p>
            <motion.div
              variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount:0.2 }}
            >
                <Button asChild size="lg" className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                    <RouterLink to="/contact">Request a Quote</RouterLink>
                </Button>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesOverviewPage;