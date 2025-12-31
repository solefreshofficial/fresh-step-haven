import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Dumbbell, Plane, Home } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Daily Work",
    description: "Perfect for office shoes worn during long work hours.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Sports",
    description: "Ideal for athletic shoes and gym bags.",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Keep your travel bags and shoes fresh on the go.",
  },
  {
    icon: Home,
    title: "Home Storage",
    description: "Great for shoe racks and cupboards.",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Versatile
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perfect <span className="text-gradient">For</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed for the Indian lifestyle — humid weather, long commutes, and active days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:glow-soft">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
