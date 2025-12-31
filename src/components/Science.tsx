import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Wind, Leaf, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Absorbs Moisture",
    description: "Silica gel crystals powerfully absorb dampness, preventing bacterial growth.",
  },
  {
    icon: Wind,
    title: "Neutralizes Odor",
    description: "Activated carbon traps odor-causing particles and volatile compounds.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No chemicals, sprays, or artificial fragrances. Just natural freshness.",
  },
  {
    icon: RefreshCw,
    title: "Reusable",
    description: "Refresh in sunlight for 2-3 hours. Reuse for weeks to months.",
  },
];

const Science = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(142 71% 45%) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Science
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlike sprays that mask odor, SoleFresh eliminates the root cause — moisture and bacteria.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:glow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;
