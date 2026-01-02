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
      {/* Background pattern - pure CSS */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(142 71% 45%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated gradient orb - CSS animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 animate-pulse-slow will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 45%) 0%, transparent 50%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div
                className="glass-card-hover rounded-3xl p-8 h-full text-center relative overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Hover background - CSS transition */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Emoji with CSS animation */}
                <div
                  className={`text-5xl mb-6 transform-gpu transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-125 rotate-6" : "scale-100"
                  }`}
                >
                  {useCase.image}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10 transform-gpu transition-transform duration-300 group-hover:scale-110">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground relative z-10">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {useCase.description}
                </p>

                {/* Bottom line - CSS transition */}
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

export default UseCases;
