import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    name: "Activated Carbon",
    source: "Coconut Shell Based",
    description: "High adsorption capacity traps odor-causing gases and volatile compounds.",
    color: "from-zinc-700 to-zinc-900",
  },
  {
    name: "Silica Gel Crystals",
    source: "Desiccant Material",
    description: "Absorbs excess moisture, reducing humidity that promotes bacterial growth.",
    color: "from-blue-400/30 to-blue-600/30",
  },
  {
    name: "Fragrance-Infused Rice",
    source: "Essential Oil Infused",
    description: "Provides mild, natural freshness without overpowering artificial scents.",
    color: "from-amber-400/30 to-amber-600/30",
  },
];

const Ingredients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Pure & Natural
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What's <span className="text-gradient">Inside</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A carefully balanced blend of three powerful natural ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-card rounded-3xl p-8 h-full overflow-hidden relative transition-all duration-500 hover:border-primary/30">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ingredient.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Ingredient visual */}
                  <div className="w-20 h-20 rounded-2xl bg-muted mb-6 flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${ingredient.color}`} />
                  </div>

                  <span className="text-xs text-primary uppercase tracking-widest mb-2 block">
                    {ingredient.source}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {ingredient.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fabric note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Packed in <span className="text-primary font-medium">PP Spunbond Non-Woven Fabric (100 GSM)</span> — breathable, durable, and leak-proof.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
