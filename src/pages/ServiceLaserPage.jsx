import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import {
  ScanLine,
  Layers,
  Cog,
  Palette,
  ShieldCheck,
  ArrowRight,
  Scissors,
} from "lucide-react";

const serviceDetails = {
  id: "service-laser-cutting",
  icon: <ScanLine size={60} className="text-krz-button-green" />,
  title: "Laser Cutting & Engraving",
  tagline: "Intricate Designs and Precision Marking on Diverse Materials",
  heroImageQuery:
    "Laser cutter head emitting a bright beam on a sheet of dark material",
  heroImageAlt:
    "Laser beam precisely cutting an intricate pattern on a material sheet.",
  description:
    "KRZ Engineering offers high-precision laser cutting and engraving services, capable of producing intricate designs, custom parts, and detailed markings on a wide array of materials. From industrial components to artistic creations, our laser technology delivers clean cuts and sharp engravings with exceptional accuracy.",
  keyAspects: [
    {
      title: "Precision Cutting",
      text: "Our advanced laser systems achieve highly accurate cuts, enabling complex geometries, fine details, and sharp corners on materials like acrylic, wood, plastics, and thin metals.",
      imageQuery:
        "Laser cutting machine precisely cutting a complex metal stencil",
      imageAlt: "Laser cutting a detailed stencil from a metal sheet.",
      src: "/assets/images/metal-stencil.jpg",
    },
    {
      title: "Detailed Engraving",
      text: "Create permanent, high-resolution markings, logos, text, and patterns on various surfaces. Ideal for part identification, branding, and decorative applications.",
      imageQuery: "Close-up of a laser engraving a logo onto a wooden plaque",
      imageAlt: "Laser engraving a detailed logo on wood.",
      src: "/assets/images/wooden-engraving.jpg",
    },
    {
      title: "Material Versatility",
      text: "We work with a broad spectrum of materials, including various plastics (Acrylic, PETG), woods (Plywood, MDF), leather, fabrics, paper, cardboard, and specific types of steel and stainless steel.",
      imageQuery:
        "Samples of laser cut and engraved materials: wood, acrylic, metal",
      imageAlt: "Collection of laser-processed material samples.",
      src: "/assets/images/sample-materials.jpg",
    },
  ],
  features: [
    {
      icon: <Scissors className="text-krz-primary-green h-6 w-6" />,
      text: "Clean Edges & Minimal Material Distortion",
    },
    {
      icon: <Palette className="text-krz-primary-green h-6 w-6" />,
      text: "Suitable for Prototypes & Production Runs",
    },
    {
      icon: <Layers className="text-krz-primary-green h-6 w-6" />,
      text: "Large Format Cutting Bed Available",
    },
    {
      icon: <Cog className="text-krz-primary-green h-6 w-6" />,
      text: "Vector File Compatibility (DXF, AI, SVG, PDF)",
    },
    {
      icon: <ShieldCheck className="text-krz-primary-green h-6 w-6" />,
      text: "Non-Contact Process, Reducing Material Stress",
    },
    {
      icon: <ScanLine className="text-krz-primary-green h-6 w-6" />,
      text: "Engraving on Cylindrical Objects (Rotary Attachment)",
    },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceLaserPage = () => {
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
            src="/assets/images/laser-cutting.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-krz-primary-green/50 to-transparent"></div>
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
              Precision Laser Services
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
                Our Laser Capabilities
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
                  alt="Intricately laser-cut acrylic sign"
                  src="/assets/images/laser-cut-sign.jpg"
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
                  alt="Laser engraved metal Yeti cup with detailed logo"
                  src="/assets/images/yeti-cup-engraving.jpg"
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
                    src={aspect.src}
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
              Discuss Your Laser Project
            </h3>
            <p className="text-lg text-foreground max-w-xl mx-auto mb-8">
              For custom cutting, engraving, or marking, our laser services
              offer precision and versatility. Contact us to explore the
              possibilities.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <RouterLink to="/contact">
                Inquire About Laser Services{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </RouterLink>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLaserPage;
