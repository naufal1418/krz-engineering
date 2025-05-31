
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Printer, ScanLine, Ruler, Building2, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { servicePaths } from '@/config/paths'; // Updated import

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const serviceTeasers = [
    {
      icon: <Cpu size={40} className="text-krz-primary-green group-hover:text-krz-button-green transition-colors" />,
      title: "CNC Machining",
      description: "Precision parts from various metals and plastics.",
      link: servicePaths['cnc-machining'],
    },
    {
      icon: <Printer size={40} className="text-krz-primary-green group-hover:text-krz-button-green transition-colors" />,
      title: "3D Printing",
      description: "Rapid prototyping and custom parts with FDM & SLA.",
      link: servicePaths['3d-printing'],
    },
    {
      icon: <ScanLine size={40} className="text-krz-primary-green group-hover:text-krz-button-green transition-colors" />,
      title: "Laser Cutting",
      description: "Detailed cutting and engraving on steel and plastics.",
      link: servicePaths['laser-cutting'],
    },
    {
      icon: <Ruler size={40} className="text-krz-primary-green group-hover:text-krz-button-green transition-colors" />,
      title: "CAD Design",
      description: "From concept to production-ready 3D models.",
      link: servicePaths['cad-design'],
    },
  ];

  const portfolioOverviewItems = [
    { id: 1, title: "Intricate Gear System", query: "detailed fdm 3d printed gear system", alt: "Complex gear system printed in grey FDM material", src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479" },
    { id: 2, title: "Artistic Steel Panel", query: "laser cut artistic steel panel", alt: "Decorative steel panel with a flowing pattern, laser-cut", src: "https://images.unsplash.com/photo-1604578762000-43813838c994" },
    { id: 3, title: "High-Detail Figurine", query: "high detail resin 3d printed figurine", alt: "Smooth and detailed character figurine printed in white resin", src: "https://images.unsplash.com/photo-1604754742629-AC92dd189194" },
  ];


  return (
    <div id="home" className="space-y-16 md:space-y-24 pb-12 pt-0"> {/* Removed top padding as header handles it */}
      {/* Hero Section */}
      <motion.section
        className="relative py-20 md:py-28 lg:py-32 min-h-[calc(70vh-80px)] md:min-h-[calc(80vh-80px)] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover filter brightness-[.65]"
            alt="Abstract engineering background with sparks and glowing lines" src="https://images.unsplash.com/photo-1668877119549-ba556a4a09ff" />
          <div className="absolute inset-0 bg-gradient-to-b from-krz-primary-green/20 to-krz-text-dark-gray/60"></div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 animate-fade-in"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-6 leading-tight text-gradient-green-hero">
            Transforming Ideas into Reality
            <br className="hidden md:block" />
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">with Precision Engineering</span>
          </h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-krz-light-accent-green mb-10 max-w-3xl mx-auto font-medium"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.3s' }}
          >
            3D Printing | CNC Machining | Laser Cutting | CAD Design
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.6s' }}
          >
            <Button asChild size="lg" className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <RouterLink to="/contact">Get a Quote</RouterLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-krz-button-green text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <RouterLink to="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></RouterLink>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
      <style jsx>{`
        .text-gradient-green-hero {
          background-image: linear-gradient(to right, var(--krz-light-accent-green), #FFFFFF);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>

      {/* About Preview Section */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={fadeIn}>
            <img  
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px]"
              alt="Engineers collaborating over a CAD model on a computer screen" src="https://images.unsplash.com/photo-1671726805768-93b4c260766b" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <Building2 className="w-12 h-12 text-krz-primary-green mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-6">
              Pioneering Mechanical Innovation
            </h2>
            <p className="text-lg text-foreground mb-6">
              KRZ Engineering is at the forefront of mechanical innovation, blending cutting-edge technology with profound expertise. We are committed to transforming your complex ideas into tangible, high-quality realities with precision and efficiency.
            </p>
            <Button asChild variant="link" className="text-krz-button-green hover:text-krz-primary-green text-lg p-0 h-auto font-semibold">
              <RouterLink to="/about">Discover Our Story <ArrowRight className="ml-2 h-5 w-5" /></RouterLink>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Teasers Section - Broad Overview */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">Our Core Services</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Delivering a comprehensive range of engineering services to meet your specific needs. Explore each service to learn more.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {serviceTeasers.map((service, index) => (
            <motion.div key={index} variants={fadeIn} className="h-full">
              <Card className="group h-full bg-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-krz-light-accent-green/50 hover:border-krz-primary-green">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-krz-light-accent-green/30 rounded-full mb-4 transition-all duration-300 group-hover:bg-krz-primary-green/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-krz-primary-green group-hover:text-krz-button-green transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-card-foreground mb-4 min-h-[40px]">{service.description}</CardDescription>
                  <Button asChild variant="ghost" className="text-krz-button-green hover:text-krz-primary-green hover:bg-krz-light-accent-green/50 font-semibold">
                    <RouterLink to={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></RouterLink>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Overview Section */}
       <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">Featured Works</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A glimpse into the precision and quality we deliver. See more in our full portfolio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioOverviewItems.map((item) => (
            <motion.div key={item.id} variants={fadeIn}>
              <Card className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video bg-krz-light-accent-green/20">
                <img  
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  alt={item.alt} src="https://images.unsplash.com/photo-1627398242454-45a1465c2479" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <RouterLink to="/portfolio">View Full Portfolio <Eye className="ml-2 h-5 w-5" /></RouterLink>
          </Button>
        </div>
      </motion.section>


      {/* CTA Strip Section */}
      <motion.section
        className="bg-gradient-to-r from-krz-primary-green to-krz-button-green py-16 md:py-20 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Need help with a mechanical part, print, or prototype?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-slate-100"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ transitionDelay: '0.2s' }}
          >
            Our experts are ready to assist you with your most challenging projects.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ transitionDelay: '0.4s' }}
          >
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-krz-button-green text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <RouterLink to="/contact">Request a Quote</RouterLink>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
