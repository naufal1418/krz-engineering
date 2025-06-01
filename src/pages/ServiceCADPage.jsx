import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import {
  Ruler as CadRulerIcon,
  Layers,
  Cog,
  RefreshCw,
  CheckSquare,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const serviceDetails = {
  id: "service-cad-design",
  icon: <CadRulerIcon size={60} className="text-krz-button-green" />,
  title: "CAD Design & Prototyping",
  tagline: "Transforming Concepts into Production-Ready Digital Blueprints",
  heroImageQuery:
    "Modern CAD workstation with complex 3D model on dual monitors",
  heroImageAlt:
    "Advanced CAD software interface showing a detailed 3D mechanical assembly.",
  description:
    "KRZ Engineering offers expert Computer-Aided Design (CAD) and prototyping services to bring your ideas from initial sketch to fully realized digital models. Our skilled designers utilize industry-leading software to develop precise 2D drawings and 3D models optimized for manufacturing processes like 3D printing, CNC machining, and laser cutting.",
  keyAspects: [
    {
      title: "Concept Development",
      text: "Collaborate with our designers to turn your nascent ideas and sketches into detailed, viable 3D models.",
      imageQuery:
        "Designer sketching ideas on a tablet next to a computer with CAD software",
      imageAlt: "Designer working on initial concept sketches.",
      src: "/assets/images/designer-sketching.jpg",
    },
    {
      title: "Reverse Engineering",
      text: "We can accurately recreate digital models from existing physical parts, ideal for modifications, improvements, or legacy part replication.",
      imageQuery:
        "3D scanner capturing data from a physical object for reverse engineering",
      imageAlt: "3D scanning process for reverse engineering.",
      src: "/assets/images/3d-scanning.jpg",
    },
    {
      title: "Design for Manufacturability (DfM)",
      text: "Our designs are not just visually appealing but are optimized for efficient and cost-effective production using your chosen manufacturing method.",
      imageQuery:
        "CAD model showing design features optimized for 3D printing supports",
      imageAlt: "CAD model optimized for manufacturing.",
      src: "/assets/images/cad-model.jpg",
    },
  ],
  features: [
    {
      icon: <Layers className="text-krz-primary-green h-6 w-6" />,
      text: "Parametric 3D Solid Modeling",
    },
    {
      icon: <RefreshCw className="text-krz-primary-green h-6 w-6" />,
      text: "Iterative Design & Prototyping Support",
    },
    {
      icon: <Cog className="text-krz-primary-green h-6 w-6" />,
      text: "Assembly Design & Interference Checking",
    },
    {
      icon: <CheckSquare className="text-krz-primary-green h-6 w-6" />,
      text: "2D Technical Drawing Creation (GD&T)",
    },
    {
      icon: <Lightbulb className="text-krz-primary-green h-6 w-6" />,
      text: "Product Visualization & Rendering",
    },
    {
      icon: <CadRulerIcon className="text-krz-primary-green h-6 w-6" />,
      text: "Custom Solutions for Unique Challenges",
    },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceCADPage = () => {
  return (
    <div className="pt-0">
      <motion.section
        className="relative py-24 md:py-32 text-white text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter brightness-50"
            alt={serviceDetails.heroImageAlt}
            src="/assets/images/cad-designing.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-krz-primary-green/100 to-primary-green/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="mb-6 flex justify-center"
          >
            {serviceDetails.icon}
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: "0.1s" }}
          >
            {serviceDetails.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-krz-light-accent-green max-w-3xl mx-auto"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: "0.2s" }}
          >
            {serviceDetails.tagline}
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-krz-primary-green mb-4">
              Our CAD Design Process
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {serviceDetails.description}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-krz-primary-green mb-6">
                Core CAD Services
              </h3>
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
                    <span className="mr-4 mt-1 flex-shrink-0 p-2 bg-krz-light-accent-green/20 rounded-full">
                      {feature.icon}
                    </span>
                    <span className="text-card-foreground">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                  alt="Complex CAD assembly on a computer screen"
                  src="/assets/images/cad-computer-screen.jpg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                  alt="Detailed 2D technical drawing with dimensions"
                  src="/assets/images/drawing.jpg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-12 md:space-y-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            {serviceDetails.keyAspects.map((aspect, idx) => (
              <motion.div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
                variants={fadeIn}
              >
                <div
                  className={`relative h-80 md:h-96 rounded-xl shadow-xl overflow-hidden ${
                    idx % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={aspect.imageAlt}
                    src={aspect.src || aspect.imageQuery}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className={`p-6 ${idx % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-krz-primary-green mb-4">
                    {aspect.title}
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    {aspect.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16 md:mt-24"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-krz-primary-green mb-6">
              Bring Your Designs to Life
            </h3>
            <p className="text-lg text-foreground max-w-xl mx-auto mb-8">
              Whether you're starting from scratch or need to refine existing
              designs, our CAD experts are ready to assist.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <RouterLink to="/contact">
                Discuss Your CAD Project <ArrowRight className="ml-2 h-5 w-5" />
              </RouterLink>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCADPage;
