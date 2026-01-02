import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Package, Calendar, MapPin, ArrowRight } from "lucide-react";
import productPack from "@/assets/product-pack.jpg";

const ProductDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const details = [
    { icon: Package, label: "Quantity", value: "2 × 40-50g Sachets" },
    { icon: Calendar, label: "Shelf Life", value: "2-3 Months from Mfg." },
    { icon: MapPin, label: "Made in", value: "India 🇮🇳" },
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
    <section
      ref={containerRef}
      id="details"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Animated lines - reduced to 3 for performance, CSS animation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-x will-change-transform"
            style={{
              top: `${25 + i * 20}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Product info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Product Details
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Premium{" "}
              <span className="text-gradient">Quality</span>
            </h2>

            {/* Price with optimized animation */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-baseline gap-3 px-8 py-4 rounded-2xl bg-card/50 border border-primary/20">
                <span className="text-5xl md:text-7xl font-black text-gradient">
                  ₹199
                </span>
                <span className="text-muted-foreground text-sm">
                  inclusive of all taxes
                </span>
              </div>
            </motion.div>

            {/* Details cards with CSS transitions */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="glass-card rounded-2xl p-5 text-center group transform-gpu transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {detail.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {detail.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors duration-300 transform-gpu group-hover:scale-110">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with optimized animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <a
                href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden relative group transform-gpu transition-transform duration-300 hover:scale-105 active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-foreground/20 to-primary animate-shimmer" />
                <span className="relative z-10 text-lg">Buy Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Product image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="will-change-transform">
              {/* Glow - CSS animation */}
              <div className="absolute inset-0 glow-intense rounded-3xl opacity-40 animate-pulse-glow will-change-auto" />

              {/* Product image with CSS tilt effect */}
              <div className="relative animate-tilt will-change-transform">
                <img
                  src={productPack}
                  alt="SoleFresh Product Package"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  loading="lazy"
                />

                {/* Overlay effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/40 via-transparent to-white/5" />
              </div>

              {/* Floating badge - CSS animation */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float will-change-transform">
                Best Seller
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
