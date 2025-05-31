import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Wrench as Tool, CheckCircle } from 'lucide-react';

const AboutSection = () => {
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
    { icon: <Zap className="text-krz-button-green" />, text: "Fast turnaround times for rapid project completion." },
    { icon: <Tool className="text-krz-button-green" />, text: "Wide material options across all manufacturing processes." },
    { icon: <Award className="text-krz-button-green" />, text: "Seamless CAD-to-production service for efficient workflows." },
    { icon: <Users className="text-krz-button-green" />, text: "Custom quotes and dedicated design support for tailored solutions." },
    { icon: <CheckCircle className="text-krz-button-green" />, text: "Commitment to quality and precision in every component." },
  ];

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-krz-primary-green mb-4">About KRZ Engineering</h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Pioneering precision engineering solutions to bring innovative ideas to life.
        </p>
      </motion.div>

      <motion.div
        className="mb-12 md:mb-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-bold text-krz-primary-green mb-4">Our Mission & Vision</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            <strong>Mission:</strong> To empower innovators and businesses by providing accessible, high-quality precision engineering services. We strive to transform complex designs into tangible realities through cutting-edge technology and expert craftsmanship.
          </p>
          <p className="text-foreground leading-relaxed">
            <strong>Vision:</strong> To be a leading force in advanced manufacturing, recognized for our commitment to innovation, reliability, and customer success. We aim to continuously evolve our capabilities to meet the ever-changing demands of modern industry.
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <img 
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[400px]"
            alt="Modern engineering workshop with advanced machinery"
           src="https://images.unsplash.com/photo-1635108198854-26645ffe6714" />
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-12 md:mb-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-krz-primary-green mb-6 text-center">Our Approach & Value Proposition</h2>
        <div className="bg-card p-8 rounded-xl shadow-lg border border-krz-light-accent-green/50">
          <p className="text-card-foreground mb-4 leading-relaxed">
            KRZ Engineering is built on a foundation of expertise, precision, and a client-centric approach. We leverage state-of-the-art equipment for 3D printing (FDM & SLA), CNC milling, lathe machining, and laser cutting/engraving. Our comprehensive CAD design and prototyping services bridge the gap between concept and creation, ensuring seamless integration with manufacturing processes.
          </p>
          <p className="text-card-foreground leading-relaxed">
            We understand that each project is unique. That's why we offer personalized consultations, material guidance, and design optimization support. Our value lies in our ability to deliver high-quality components with impressive speed and accuracy, catering to diverse industries including prototyping, custom part manufacturing, and specialized applications.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mb-12 md:mb-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-krz-primary-green mb-8 text-center">Key Strengths</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {keyStrengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-krz-light-accent-green/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{strength.icon}</div>
                <p className="text-card-foreground">{strength.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeIn}>
          <img 
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[400px]"
            alt="Engineer working at a CAD workstation with complex 3D models"
           src="https://images.unsplash.com/photo-1597765221336-1f65bb4c4fee" />
        </motion.div>
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-bold text-krz-primary-green mb-4">Our Commitment</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            At KRZ Engineering, we are more than just a service provider; we are your partners in innovation. We are committed to maintaining the highest standards of quality, investing in the latest technologies, and fostering a culture of continuous improvement. Our goal is to help you achieve your objectives efficiently and effectively, delivering engineering excellence every step of the way.
          </p>
          <p className="text-foreground leading-relaxed">
            Whether you're a startup with a groundbreaking idea or an established company seeking reliable manufacturing support, KRZ Engineering is here to turn your visions into reality.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;