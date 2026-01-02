import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/solefresh-logo.png";

const navLinks = [
  { href: "#science", label: "How It Works" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#details", label: "Details" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary via-primary to-transparent will-change-transform"
          style={{ width: progressWidth }}
        />

        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-24">
            {/* Logo with shiny black top effect */}
            <a
              href="#"
              className="flex items-center relative z-10 transform-gpu transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="SoleFresh"
                  className="h-8 md:h-10 lg:h-12 w-auto relative z-10"
                />
                {/* Shiny black top overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 30%, transparent 50%)",
                    maskImage: "url(" + logo + ")",
                    WebkitMaskImage: "url(" + logo + ")",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full relative overflow-hidden group transform-gpu transition-transform duration-300 hover:scale-105 active:scale-[0.98]"
              >
                <span className="relative z-10">Buy Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-foreground"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-2xl border-b border-border md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground py-2 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full mt-4"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
