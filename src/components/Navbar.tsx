import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/solefresh-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-24">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="SoleFresh" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ingredients
            </a>
            <a href="#details" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Details
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:glow-soft transition-all duration-300 hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
