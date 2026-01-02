import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import productHero from "@/assets/product-hero.jpg";
import logo from "@/assets/solefresh-logo.png";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Noise texture overlay - CSS only */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Animated gradient orbs - GPU optimized with will-change */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 45% / 0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl animate-float will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(142 80% 55% / 0.5) 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />

      {/* Grid pattern - CSS only */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(142 71% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 71% 45%) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 text-center will-change-transform"
      >
        {/* Brand tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/80 border border-primary/20 mb-10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide text-primary">
            Natural Shoe Care Revolution
          </span>
        </motion.div>

        {/* Logo animation with shiny black top effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 relative inline-block"
        >
          <img
            src={logo}
            alt="SoleFresh"
            className="h-20 md:h-28 lg:h-36 w-auto mx-auto relative z-10"
          />
          {/* Shiny black top overlay effect */}
          <div 
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)",
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
          {/* Shine reflection */}
          <div 
            className="absolute inset-0 pointer-events-none z-30 animate-shine"
            style={{
              background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 55%, transparent 70%)",
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
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Fresh shoes.</span>{" "}
            <span className="text-gradient">Every day.</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          A chemical-free, reusable shoe deodorizer that eliminates odor at its
          source — <span className="text-primary font-medium">moisture</span>.
        </motion.p>

        {/* Product image with optimized 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-lg"
        >
          {/* Glow effect - CSS animation */}
          <div className="absolute inset-0 glow-intense rounded-3xl animate-pulse-glow will-change-auto" />

          {/* Floating product - CSS animation for performance */}
          <div className="relative animate-float will-change-transform">
            <img
              src={productHero}
              alt="SoleFresh Shoe Deodorizer Sachets"
              className="relative w-full h-auto rounded-3xl shadow-2xl"
              loading="eager"
            />

            {/* Reflection effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none" />
          </div>

          {/* Reduced particle effects - only 3 for performance */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/60 animate-particle will-change-transform"
              style={{
                left: `${25 + i * 25}%`,
                bottom: "-20px",
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </motion.div>

        {/* Scroll indicator - CSS animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20"
        >
          <a
            href="#science"
            className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              Explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-current animate-scroll-indicator" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
