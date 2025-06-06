import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Zap,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, null, `/#${sectionId}`);
    }
  };

  const navLinks = [
    { name: "About Us", path: "/#about", sectionId: "about" },
    { name: "Services", path: "/#services", sectionId: "services" },
    { name: "Portfolio", path: "/#portfolio", sectionId: "portfolio" },
    { name: "Contact", path: "/#contact", sectionId: "contact" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/krz-engineering/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/krzengineering/",
      label: "Instagram",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/KRZEngineeringPerth",
      label: "Facebook",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/KrzEngineering",
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-foreground text-background/80 border-t-4 border-krz-primary-green pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a
              href="/#home"
              onClick={(e) => handleScrollToSection(e, "home")}
              className="flex items-center space-x-2 mb-4 text-krz-primary-green hover:text-krz-button-green transition-colors"
            >
              <img
                src="/assets/icons/android-chrome-512x512.png"
                alt="KRZ Logo"
                className="h-20 w-20 text-[#34A853]"
              />
              <span className="text-2xl font-bold uppercase tracking-tighter">
                KRZ ENGINEERING
              </span>
            </a>
            <p className="text-sm">
              Precision engineering solutions for innovative ideas. Your partner
              in 3D printing, CNC machining, laser cutting, and CAD design.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase text-krz-light-accent-green mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleScrollToSection(e, link.sectionId)}
                    className="hover:text-krz-light-accent-green transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase text-krz-light-accent-green mb-4">
              Contact Us
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-3 mt-1 flex-shrink-0 text-krz-light-accent-green"
                />
                <a
                  href="mailto:sales@krzengineering.com.au"
                  className="hover:text-krz-light-accent-green transition-colors"
                >
                  sales@krzengineering.com.au
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-3 mt-1 flex-shrink-0 text-krz-light-accent-green"
                />
                <a
                  href="tel:+61461486459"
                  className="hover:text-krz-light-accent-green transition-colors"
                >
                  +61 461 486 459
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 mt-1 flex-shrink-0 text-krz-light-accent-green"
                />
                <span>Rivervale, Perth, Western Australia</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase text-krz-light-accent-green mb-4">
              Follow Us
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-krz-primary-green/30 hover:bg-krz-button-green rounded-full text-krz-light-accent-green hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-krz-primary-green/30 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} KRZ Engineering. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Powered by{" "}
            <a
              href="https://datalkemi.com" // <-- replace with your actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-krz-light-accent-green hover:underline"
            >
              Datalkemi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
