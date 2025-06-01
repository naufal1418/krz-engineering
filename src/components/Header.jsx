import React, { useState, useEffect } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicePaths } from "@/config/paths"; // Updated import

const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" }, // Main services link
  { name: "Portfolio", path: "/portfolio" },
];

const serviceSubLinks = [
  { name: "3D Printing", path: servicePaths["3d-printing"] },
  { name: "CAD Design", path: servicePaths["cad-design"] },
  { name: "CNC Machining", path: servicePaths["cnc-machining"] },
  { name: "Laser Cutting", path: servicePaths["laser-cutting"] },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // For desktop dropdown
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // For mobile accordion
  const location = useLocation();
  const [submenuTimeout, setSubmenuTimeout] = useState(null); // To delay submenu close

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileSubmenu = () => setMobileSubmenuOpen(!mobileSubmenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
    setOpenSubmenu(null); // Close desktop submenu on route change
    setMobileSubmenuOpen(false); // Close mobile submenu
  }, [location.pathname]);

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const NavItem = ({ to, children, exact = false, onClick }) => {
    const linkClass = ({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-krz-light-accent-green text-krz-primary-green"
          : "text-foreground hover:bg-krz-light-accent-green/50 hover:text-krz-primary-green"
      }`;
    return (
      <NavLink to={to} className={linkClass} end={exact} onClick={onClick}>
        {children}
      </NavLink>
    );
  };

  const MobileNavItem = ({ to, children, exact = false, onClick }) => {
    const linkClass = ({ isActive }) =>
      `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
        isActive
          ? "bg-krz-light-accent-green text-krz-primary-green"
          : "text-foreground hover:bg-krz-light-accent-green/70 hover:text-krz-primary-green"
      }`;
    return (
      <NavLink to={to} className={linkClass} end={exact} onClick={onClick}>
        {children}
      </NavLink>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-30">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RouterLink
              to="/"
              className="flex items-center space-x-2 text-krz-primary-green hover:text-krz-button-green transition-colors"
            >
              <img
                src="/assets/icons/logo.png"
                alt="KRZ Logo"
                className="h-20 w-20 text-[#34A853]"
              />
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                KRZ ENGINEERING
              </span>
            </RouterLink>
          </motion.div>

          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {mainNavLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (submenuTimeout) clearTimeout(submenuTimeout);
                    setOpenSubmenu("services");
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setOpenSubmenu(null);
                    }, 200); // Delay in ms
                    setSubmenuTimeout(timeout);
                  }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                        isActive || location.pathname.startsWith("/services/")
                          ? "bg-krz-light-accent-green text-krz-primary-green"
                          : "text-foreground hover:bg-krz-light-accent-green/50 hover:text-krz-primary-green"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        openSubmenu === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>
                  {openSubmenu === "services" && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 bg-background shadow-lg rounded-md py-2 min-w-[220px] z-20"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {serviceSubLinks.map((subLink) => (
                        <RouterLink
                          key={subLink.name}
                          to={subLink.path}
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-foreground hover:bg-krz-light-accent-green/50 hover:text-krz-primary-green ${
                            location.pathname === subLink.path
                              ? "bg-krz-light-accent-green/50 text-krz-primary-green"
                              : ""
                          }`}
                        >
                          {subLink.name}
                        </RouterLink>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <NavItem
                  key={link.name}
                  to={link.path}
                  exact={link.path === "/"}
                >
                  {link.name}
                </NavItem>
              )
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-krz-button-green hover:bg-krz-primary-green text-white ml-2"
              >
                <RouterLink to="/contact">Get a Quote</RouterLink>
              </Button>
            </motion.div>
          </nav>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="text-krz-primary-green p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-krz-button-green"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-xl pb-4 overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <nav className="flex flex-col space-y-1 px-4 pt-2">
              {mainNavLinks.map((link) => (
                <motion.div variants={menuItemVariants} key={link.name}>
                  {link.name === "Services" ? (
                    <div>
                      <button
                        onClick={toggleMobileSubmenu}
                        className={`w-full text-left flex justify-between items-center px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          location.pathname.startsWith("/services/")
                            ? "bg-krz-light-accent-green text-krz-primary-green"
                            : "text-foreground hover:bg-krz-light-accent-green/70 hover:text-krz-primary-green"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            mobileSubmenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSubmenuOpen && (
                          <motion.div
                            className="pl-4 mt-1 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {serviceSubLinks.map((subLink) => (
                              <MobileNavItem
                                key={subLink.name}
                                to={subLink.path}
                                onClick={toggleMenu}
                              >
                                {subLink.name}
                              </MobileNavItem>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <MobileNavItem
                      to={link.path}
                      exact={link.path === "/"}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </MobileNavItem>
                  )}
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-2">
                <Button
                  asChild
                  className="w-full bg-krz-button-green hover:bg-krz-primary-green text-white"
                >
                  <RouterLink to="/contact" onClick={toggleMenu}>
                    Get a Quote
                  </RouterLink>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
