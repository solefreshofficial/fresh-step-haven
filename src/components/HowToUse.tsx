import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sachet from "@/assets/sachet.jpg";

const steps = [
  {
    number: "01",
    title: "Place",
    description: "Drop one sachet inside each shoe after use.",
  },
  {
    number: "02",
    title: "Leave",
    description: "Let it work overnight or between wears.",
  },
  {
    number: "03",
    title: "Reuse",
    description: "Refresh in sunlight every few days. Repeat for months.",
  },
];

const HowToUse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 glow-primary rounded-3xl opacity-50" />
              
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={sachet}
                  alt="SoleFresh Sachet"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Simple & Effective
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                How to <span className="text-gradient">Use</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="text-5xl md:text-6xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
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
