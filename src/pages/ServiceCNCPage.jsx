import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Cpu, Cog, Droplet, Layers, CheckCircle, ArrowRight, HardHat } from 'lucide-react';

const serviceDetails = {
  id: "service-cnc-machining",
  icon: <Cpu size={60} className="text-krz-button-green" />,
  title: "CNC & Lathe Machining",
  tagline: "Precision Machining for Robust and Accurate Components",
  heroImageQuery: "CNC milling machine in action with metal sparks flying",
  heroImageAlt: "Close-up of a CNC machine cutting a metal part with high precision.",
  description: "KRZ Engineering provides high-precision CNC (Computer Numerical Control) milling and lathe machining services. We specialize in producing robust and accurate components from a variety of metals and engineering plastics, suitable for demanding applications, functional prototypes, and end-use parts.",
  keyAspects: [
    { title: "Advanced Milling Capabilities", text: "Our multi-axis CNC milling centers can produce complex geometries with tight tolerances, perfect for intricate parts and custom tooling.", imageQuery: "Multiple CNC machines in a clean modern workshop", imageAlt: "View of a modern CNC machining workshop." },
    { title: "Precision Lathe Work", text: "We offer small-part lathe machining for creating precise cylindrical components, shafts, and custom fittings with excellent surface finishes.", imageQuery: "Close up of a lathe machine turning a metal rod", imageAlt: "Lathe machine shaping a cylindrical metal part." },
    { title: "Diverse Material Expertise", text: "Experienced in machining Steel, Aluminum, Brass, Stainless Steel, as well as engineering plastics like ABS, Delrin, Nylon, and PEEK.", imageQuery: "Selection of machined metal and plastic parts in various shapes", imageAlt: "Examples of machined parts in different materials." },
  ],
  features: [
    { icon: <Cog className="text-krz-primary-green h-6 w-6" />, text: "High-Tolerance Machining for Critical Applications" },
    { icon: <Droplet className="text-krz-primary-green h-6 w-6" />, text: "Coolant & Lubrication Systems for Optimal Finish" },
    { icon: <Layers className="text-krz-primary-green h-6 w-6" />, text: "Prototype to Small/Medium Batch Production" },
    { icon: <CheckCircle className="text-krz-primary-green h-6 w-6" />, text: "Quality Control & Inspection Processes" },
    { icon: <HardHat className="text-krz-primary-green h-6 w-6" />, text: "Durable Parts for Functional Testing & End Use" },
    { icon: <Cpu className="text-krz-primary-green h-6 w-6" />, text: "Support for Various CAD File Formats" },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceCNCPage = () => {
  return (
    <div className="pt-0">
      <motion.section 
        className="relative py-24 md:py-32 text-white text-center overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover filter brightness-50" 
            alt={serviceDetails.heroImageAlt}
           src="https://images.unsplash.com/photo-1649215636705-1084bd6df97a" />
          <div className="absolute inset-0 bg-gradient-to-t from-krz-primary-green/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="mb-6 flex justify-center">{serviceDetails.icon}</motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4"
            variants={fadeIn} initial="initial" animate="animate" style={{ transitionDelay: '0.1s' }}
          >
            {serviceDetails.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-krz-light-accent-green max-w-3xl mx-auto"
            variants={fadeIn} initial="initial" animate="animate" style={{ transitionDelay: '0.2s' }}
          >
            {serviceDetails.tagline}
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">Our CNC Machining Excellence</h2>
            <p className="text-lg text-foreground leading-relaxed">{serviceDetails.description}</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-16"
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-krz-primary-green mb-6">Key CNC Service Features</h3>
              <ul className="space-y-4">
                {serviceDetails.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start p-4 bg-card rounded-lg shadow-sm border border-krz-light-accent-green/30"
                    custom={i}
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <span className="mr-4 mt-1 flex-shrink-0 p-2 bg-krz-light-accent-green/20 rounded-full">{feature.icon}</span>
                    <span className="text-card-foreground">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
             <div className="grid grid-cols-1 gap-6">
                <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
                    <img  className="rounded-xl shadow-lg object-cover w-full h-64" alt="CNC machined aluminum component with complex features"  src="https://images.unsplash.com/photo-1590703582237-d682886a53d0" />
                </motion.div>
                <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
                    <img  className="rounded-xl shadow-lg object-cover w-full h-64" alt="Precisely turned steel shaft on a lathe"  src="https://images.unsplash.com/photo-1531573165-97a562fc512f" />
                </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-12 md:space-y-16"
            initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}
          >
            {serviceDetails.keyAspects.map((aspect, idx) => (
              <motion.div 
                key={idx} 
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
                variants={fadeIn}
              >
                <div className={`relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img  
                    className="w-full h-full object-cover" 
                    alt={aspect.imageAlt}
                   src="https://images.unsplash.com/photo-1665292591084-e8524e64f918" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className={`p-6 ${idx % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-krz-primary-green mb-4">{aspect.title}</h3>
                  <p className="text-lg text-foreground leading-relaxed">{aspect.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16 md:mt-24"
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-krz-primary-green mb-6">Need Precision Machined Parts?</h3>
            <p className="text-lg text-foreground max-w-xl mx-auto mb-8">
              Our CNC machining services deliver the accuracy and durability your projects demand. Contact us for a quote.
            </p>
            <Button asChild size="lg" className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <RouterLink to="/contact">Get CNC Machining Quote <ArrowRight className="ml-2 h-5 w-5" /></RouterLink>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCNCPage;