import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Package, Calendar, MapPin } from "lucide-react";
import productPack from "@/assets/product-pack.jpg";

const ProductDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    { icon: Package, label: "Quantity", value: "2 × 40-50g Sachets" },
    { icon: Calendar, label: "Shelf Life", value: "2-3 Months from Mfg." },
    { icon: MapPin, label: "Made in", value: "India" },
  ];

  const benefits = [
    "Chemical-free & natural",
    "Safe for daily use",
    "Reusable for months",
    "Works overnight",
    "Fits all shoe sizes",
    "Multi-purpose use",
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Product Details
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium <span className="text-gradient">Quality</span>
            </h2>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-gradient">₹199</span>
                <span className="text-muted-foreground">inclusive of all taxes</span>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <detail.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground mb-1">{detail.label}</div>
                  <div className="text-sm font-semibold text-foreground">{detail.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                Buy Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Product image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 glow-primary rounded-3xl opacity-30" />
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={productPack}
                  alt="SoleFresh Product Package"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
