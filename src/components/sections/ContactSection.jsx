import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  Globe,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    "CNC Machining",
    "3D Printing",
    "Laser Cutting",
    "CAD Design",
    "Other Inquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form data submitted:", formData);
      localStorage.setItem(
        "contactFormSubmission",
        JSON.stringify({ ...formData, submittedAt: new Date().toISOString() })
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });

      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for your inquiry. We'll get back to you soon.",
        variant: "default",
        className: "bg-krz-button-green text-white",
      });
    }, 1500);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/company/krz-engineering/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/krzengineering/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/KRZEngineeringPerth",
      label: "Facebook",
      color: "hover:text-blue-700",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/KrzEngineering",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20"
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-krz-primary-green mb-4">
          Get In Touch
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Have a project in mind or need a quote? Fill out the form below or
          contact us directly. We're here to help!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <motion.div
          className="md:col-span-3 bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-krz-light-accent-green/50"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {isSubmitted ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full text-center py-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-20 h-20 text-krz-button-green mb-6" />
              <h2 className="text-2xl font-semibold text-krz-primary-green mb-3">
                Thank You!
              </h2>
              <p className="text-card-foreground max-w-md">
                Your message has been successfully sent. We appreciate you
                contacting us and will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-card-foreground font-medium"
                >
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., John Doe"
                  className={`mt-1 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-krz-button-green"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-card-foreground font-medium"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., john.doe@example.com"
                  className={`mt-1 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-krz-button-green"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-card-foreground font-medium"
                >
                  Phone Number (Optional)
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +61 4XX XXX XXX"
                  className="mt-1 focus:ring-krz-button-green"
                />
              </div>

              <div>
                <Label
                  htmlFor="serviceType"
                  className="text-card-foreground font-medium"
                >
                  Service Type
                </Label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.serviceType}
                  name="serviceType"
                >
                  <SelectTrigger
                    className={`w-full mt-1 ${
                      errors.serviceType
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-krz-button-green"
                    }`}
                    id="serviceType"
                    aria-invalid={errors.serviceType ? "true" : "false"}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-card-foreground font-medium"
                >
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  className={`mt-1 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-krz-button-green"
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-krz-button-green hover:bg-krz-primary-green text-white text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </motion.div>

        <motion.div
          className="md:col-span-2 space-y-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-krz-primary-green/10 p-6 rounded-xl shadow-lg border border-krz-primary-green/20">
            <h3 className="text-2xl font-semibold text-krz-primary-green mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-3 text-krz-button-green flex-shrink-0"
                />
                <a
                  href="mailto:sales@krzengineering.com.au"
                  className="hover:text-krz-button-green transition-colors"
                >
                  sales@krzengineering.com.au
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-3 text-krz-button-green flex-shrink-0"
                />
                <a
                  href="tel:+61461486459"
                  className="hover:text-krz-button-green transition-colors"
                >
                  +61 461 486 459
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 mt-1 text-krz-button-green flex-shrink-0"
                />
                <span>
                  Perth, Western Australia <br />
                  (Servicing all of Australia)
                </span>
              </li>
              <li className="flex items-center">
                <Globe
                  size={20}
                  className="mr-3 text-krz-button-green flex-shrink-0"
                />
                <a
                  href="https://www.krzengineering.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-krz-button-green transition-colors"
                >
                  www.krzengineering.com.au
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-krz-primary-green/10 p-6 rounded-xl shadow-lg border border-krz-primary-green/20">
            <h3 className="text-2xl font-semibold text-krz-primary-green mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 bg-background hover:bg-krz-light-accent-green/50 rounded-full text-krz-primary-green ${social.color} transition-all duration-300 transform hover:scale-110 shadow-md`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-krz-primary-green/10 p-6 rounded-xl shadow-lg border border-krz-primary-green/20 h-64 md:h-auto">
            <h3 className="text-2xl font-semibold text-krz-primary-green mb-4">
              Our Location
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                title="Google Map - KRZ Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5693.104789226738!2d115.90663787110343!3d-31.957088644997807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bbbcf6520317%3A0x504f0b535df4fe0!2sRivervale%20WA%206103!5e0!3m2!1sen!2sau!4v1748732138601!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
