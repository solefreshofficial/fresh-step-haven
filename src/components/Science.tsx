import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Droplets, Wind, Leaf, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Absorbs Moisture",
    description:
      "Silica gel crystals powerfully absorb dampness, preventing bacterial growth.",
    stat: "99%",
    statLabel: "Moisture Absorbed",
  },
  {
    icon: Wind,
    title: "Neutralizes Odor",
    description:
      "Activated carbon traps odor-causing particles and volatile compounds.",
    stat: "24H",
    statLabel: "Fresh Protection",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "No chemicals, sprays, or artificial fragrances. Just natural freshness.",
    stat: "0",
    statLabel: "Harmful Chemicals",
  },
  {
    icon: RefreshCw,
    title: "Reusable",
    description: "Refresh in sunlight for 2-3 hours. Reuse for weeks to months.",
    stat: "90+",
    statLabel: "Days of Use",
  },
];

const Science = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      id="science"
      className="section-padding relative overflow-hidden"
    >
      {/* Animated background - GPU optimized */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-card via-background to-card will-change-transform"
      />

      {/* Morphing blob - CSS animation for performance */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 animate-spin-slow will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 45%) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern - pure CSS */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(142 71% 45%) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div ref={ref} className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            The Science
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            How It{" "}
            <span className="text-gradient relative">
              Works
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Unlike sprays that mask odor, SoleFresh eliminates the root cause —{" "}
            <span className="text-primary">moisture and bacteria</span>.
          </p>
        </motion.div>

        {/* Features grid - Interactive cards with optimized hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className="glass-card-hover rounded-3xl p-8 h-full relative overflow-hidden transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Hover glow effect - CSS transition */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Icon container */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 overflow-hidden transform-gpu transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary relative z-10" />
                  <div
                    className={`absolute inset-0 bg-primary/30 transform-gpu transition-transform duration-300 ${
                      hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                    }`}
                  />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <span
                    className={`text-4xl md:text-5xl font-bold text-gradient transform-gpu transition-transform duration-300 inline-block ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  >
                    {feature.stat}
                  </span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {feature.statLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Bottom accent line - CSS transition */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform-gpu transition-transform duration-300 origin-center ${
                    hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;
