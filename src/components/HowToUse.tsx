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

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section
      ref={containerRef}
      id="how-to-use"
      className="section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div ref={ref} className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Product image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div style={{ scale: imageScale, rotate: imageRotate }}>
              {/* Glow rings */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(142 71% 45% / 0.3) 0%, transparent 60%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0, -2, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={sachet}
                  alt="SoleFresh Sachet"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-primary text-2xl font-bold">✦</span>
            </motion.div>
          </motion.div>

          {/* Right side - Steps */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Simple & Effective
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
                How to{" "}
                <span className="text-gradient">Use</span>
              </h2>
            </motion.div>

            {/* Interactive steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className={`flex gap-6 p-6 rounded-2xl transition-all duration-500 ${
                      activeStep === index
                        ? "bg-card/80 border border-primary/30 glow-soft"
                        : "bg-transparent hover:bg-card/40"
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.span
                        className={`text-6xl md:text-7xl font-black transition-all duration-300 ${
                          activeStep === index
                            ? "text-gradient"
                            : "text-muted/30"
                        }`}
                        animate={
                          activeStep === index
                            ? { scale: [1, 1.05, 1] }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-2">
                        {step.description}
                      </p>
                      <motion.p
                        className="text-sm text-primary"
                        initial={{ opacity: 0, height: 0 }}
                        animate={
                          activeStep === index
                            ? { opacity: 1, height: "auto" }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {step.detail}
                      </motion.p>
                    </div>
                  </motion.div>
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