import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Dumbbell, Plane, Home } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Daily Work",
    description: "Perfect for office shoes worn during long work hours.",
    image: "👔",
  },
  {
    icon: Dumbbell,
    title: "Gym & Sports",
    description: "Ideal for athletic shoes and gym bags.",
    image: "🏋️",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Keep your travel bags and shoes fresh on the go.",
    image: "✈️",
  },
  {
    icon: Home,
    title: "Home Storage",
    description: "Great for shoe racks and cupboards.",
    image: "🏠",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="use-cases" className="section-padding relative overflow-hidden bg-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(142 71% 45%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 45%) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            Versatile
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Perfect{" "}
            <span className="text-gradient">For</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Designed for the Indian lifestyle — humid weather, long commutes,
            and active days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div
                className="glass-card-hover rounded-3xl p-8 h-full text-center relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Emoji with animation */}
                <motion.div
                  className="text-5xl mb-6"
                  animate={
                    hoveredIndex === index
                      ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {useCase.image}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <useCase.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground relative z-10">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {useCase.description}
                </p>

                {/* Bottom line */}
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

export default UseCases;