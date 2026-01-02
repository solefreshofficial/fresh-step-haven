import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import sachet from "@/assets/sachet.jpg";

const steps = [
  {
    number: "01",
    title: "Place",
    description: "Drop one sachet inside each shoe after use.",
    detail: "Simply insert the pouch — no preparation needed.",
  },
  {
    number: "02",
    title: "Leave",
    description: "Let it work overnight or between wears.",
    detail: "The ingredients actively absorb moisture and odor.",
  },
  {
    number: "03",
    title: "Reuse",
    description: "Refresh in sunlight every few days. Repeat for months.",
    detail: "2-3 hours in sunlight reactivates the absorbents.",
  },
];

const HowToUse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <section
      ref={containerRef}
      id="how-to-use"
      className="section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Reduced floating particles - only 8 for performance, CSS animation */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 animate-particle-slow will-change-transform"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div ref={ref} className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Product image with optimized 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div style={{ scale: imageScale, rotate: imageRotate }} className="will-change-transform">
              {/* Glow rings - CSS animation */}
              <div
                className="absolute inset-0 rounded-3xl animate-pulse-glow will-change-auto"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(142 71% 45% / 0.3) 0%, transparent 60%)",
                }}
              />

              {/* Floating animation wrapper - CSS */}
              <div className="relative animate-float will-change-transform">
                <img
                  src={sachet}
                  alt="SoleFresh Sachet"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  loading="lazy"
                />

                {/* Shine effect - CSS animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent animate-shine-slow pointer-events-none" />
              </div>
            </motion.div>

            {/* Orbiting element - CSS animation */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center animate-spin-slow will-change-transform">
              <span className="text-primary text-2xl font-bold">✦</span>
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Simple & Effective
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
                How to{" "}
                <span className="text-gradient">Use</span>
              </h2>
            </motion.div>

            {/* Interactive steps with CSS transitions */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`flex gap-6 p-6 rounded-2xl transform-gpu transition-all duration-300 ${
                      activeStep === index
                        ? "bg-card/80 border border-primary/30 glow-soft translate-x-2"
                        : "bg-transparent hover:bg-card/40"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <span
                        className={`text-6xl md:text-7xl font-black transition-all duration-300 ${
                          activeStep === index
                            ? "text-gradient scale-105"
                            : "text-muted/30"
                        } inline-block transform-gpu`}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-2">
                        {step.description}
                      </p>
                      <p
                        className={`text-sm text-primary overflow-hidden transition-all duration-300 ${
                          activeStep === index
                            ? "max-h-20 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
