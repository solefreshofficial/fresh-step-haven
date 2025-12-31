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
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-card via-background to-card"
      />

      {/* Morphing blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 45%) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid pattern */}
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            The Science
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            How It{" "}
            <span className="text-gradient relative">
              Works
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Unlike sprays that mask odor, SoleFresh eliminates the root cause —{" "}
            <span className="text-primary">moisture and bacteria</span>.
          </p>
        </motion.div>

        {/* Features grid - Interactive cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="glass-card-hover rounded-3xl p-8 h-full relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon container */}
                <motion.div
                  className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-primary relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary/30"
                    initial={{ y: "100%" }}
                    animate={hoveredIndex === index ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Stat */}
                <div className="mb-4">
                  <motion.span
                    className="text-4xl md:text-5xl font-bold text-gradient"
                    animate={
                      hoveredIndex === index
                        ? { scale: [1, 1.1, 1] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {feature.stat}
                  </motion.span>
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

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;