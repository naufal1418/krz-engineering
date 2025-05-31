import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Wrench as Tool, CheckCircle, Building, Target, Eye as VisionIcon, Users as TeamIcon, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const AboutPage = () => {
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

  const keyStrengths = [
    { icon: <Zap className="text-krz-button-green h-7 w-7" />, title: "Fast Turnaround", text: "Efficient processes ensuring rapid project completion without compromising quality." },
    { icon: <Tool className="text-krz-button-green h-7 w-7" />, title: "Wide Material Options", text: "Extensive selection of materials for FDM, SLA, CNC, and Laser services." },
    { icon: <Award className="text-krz-button-green h-7 w-7" />, title: "CAD-to-Production", text: "Seamless workflow from digital design to tangible, high-quality parts." },
    { icon: <Users className="text-krz-button-green h-7 w-7" />, title: "Custom Support", text: "Personalized quotes, design assistance, and dedicated project support." },
    { icon: <CheckCircle className="text-krz-button-green h-7 w-7" />, title: "Precision & Quality", text: "Unwavering commitment to accuracy and excellence in every component produced." },
    { icon: <HardHat className="text-krz-button-green h-7 w-7" />, title: "Expert Team", text: "Skilled engineers and technicians passionate about innovation and problem-solving." },
  ];

  return (
    <div className="pt-8 md:pt-12 pb-16"> {/* Adjusted top padding */}
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
              alt="Blueprint schematics overlayed on abstract engineering background" src="https://images.unsplash.com/photo-1619195481382-d94c70b0554f" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            About KRZ Engineering
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-krz-light-accent-green"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.2s' }}
          >
            Driving innovation through precision engineering and collaborative partnerships.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Overview */}
      <section id="company-overview" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn}>
            <img 
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px]"
              alt="Modern engineering workshop with advanced machinery and focused engineers"
             src="https://images.unsplash.com/photo-1470683924855-f35e93ae80b8" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <Building className="w-12 h-12 text-krz-primary-green mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-6">
              Who We Are
            </h2>
            <p className="text-foreground mb-4 leading-relaxed text-lg">
              KRZ Engineering is a dynamic mechanical engineering company based in Perth, Western Australia, specializing in advanced manufacturing solutions. We are passionate about transforming innovative concepts into high-quality, functional parts and prototypes. Our core services include 3D Printing (FDM & SLA), CNC & Lathe Machining, Laser Cutting & Engraving, and comprehensive CAD Design.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              Founded on principles of precision, reliability, and customer-centricity, we cater to a diverse clientele, from individual inventors and startups to established industrial businesses across Australia. We pride ourselves on our ability to tackle complex challenges and deliver bespoke solutions tailored to unique project requirements.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-krz-light-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeIn} className="bg-card p-8 rounded-xl shadow-lg border border-krz-light-accent-green/50">
              <div className="flex items-center mb-4">
                <Target className="w-10 h-10 text-krz-button-green mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-krz-primary-green">Our Mission</h3>
              </div>
              <p className="text-card-foreground leading-relaxed">
                To empower innovators and businesses by providing accessible, high-quality precision engineering services. We strive to transform complex designs into tangible realities through cutting-edge technology, expert craftsmanship, and a relentless pursuit of excellence.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-card p-8 rounded-xl shadow-lg border border-krz-light-accent-green/50">
              <div className="flex items-center mb-4">
                <VisionIcon className="w-10 h-10 text-krz-button-green mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-krz-primary-green">Our Vision</h3>
              </div>
              <p className="text-card-foreground leading-relaxed">
                To be a leading force in advanced manufacturing in Australia, recognized for our unwavering commitment to innovation, sustainability, reliability, and fostering long-term customer success. We aim to continuously evolve our capabilities to meet the ever-changing demands of modern industry.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Strengths */}
      <section id="key-strengths" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">Our Key Strengths</h2>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            What sets KRZ Engineering apart is our dedication to delivering exceptional value and results.
          </p>
        </motion.div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {keyStrengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-krz-light-accent-green/30 flex flex-col items-center text-center h-full"
            >
              <div className="p-3 bg-krz-light-accent-green/20 rounded-full mb-4">{strength.icon}</div>
              <h4 className="text-xl font-semibold text-krz-primary-green mb-2">{strength.title}</h4>
              <p className="text-card-foreground text-sm leading-relaxed">{strength.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

       {/* Our Approach & Team */}
      <section className="bg-krz-light-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeIn}>
              <TeamIcon className="w-12 h-12 text-krz-primary-green mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-6">
                Our Approach & Expert Team
              </h2>
              <p className="text-foreground mb-4 leading-relaxed text-lg">
                At KRZ Engineering, we believe in a collaborative approach. We work closely with our clients from initial consultation to final delivery, ensuring that every project aligns perfectly with their vision and technical requirements. Our team of skilled engineers and technicians utilizes state-of-the-art equipment and software, combined with years of hands-on experience.
              </p>
              <p className="text-foreground leading-relaxed text-lg">
                We are committed to continuous learning and improvement, staying abreast of the latest advancements in manufacturing technologies and materials. This dedication allows us to offer innovative solutions, optimize designs for manufacturability, and provide insightful guidance to help our clients achieve their goals efficiently and cost-effectively.
              </p>
            </motion.div>
             <motion.div variants={fadeIn}>
              <img 
                className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px]"
                alt="Diverse team of engineers collaborating in a modern office setting"
               src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-6">
            Partner with KRZ Engineering
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8">
            Ready to bring your engineering project to life? Discover how our expertise and cutting-edge technology can make a difference.
          </p>
          <Button asChild size="lg" className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <RouterLink to="/contact">Get a Quote Today</RouterLink>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;