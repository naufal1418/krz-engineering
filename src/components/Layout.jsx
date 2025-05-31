import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;