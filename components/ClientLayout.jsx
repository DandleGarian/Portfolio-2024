"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Drawer } from "../components/drawer";

const ClientLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsDrawerOpen(true);
    // Add any other logic for handling link clicks here
  };

  return (
    <>
      <Nav onLinkClick={handleLinkClick} />
      <Hero />
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="w-screen h-screen absolute z-20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <Drawer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientLayout;
