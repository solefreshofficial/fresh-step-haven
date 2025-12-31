import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-foreground">SOLE</span>
              <span className="text-gradient">FRESH</span>
            </h3>
            <p className="text-muted-foreground">Fresh shoes. Every day.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8"
          >
            <a 
              href="https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Shop
            </a>
            <a 
              href="#science" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#ingredients" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Ingredients
            </a>
          </motion.div>

          {/* Safety note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-xs text-muted-foreground max-w-xs">
              For external use only. Keep away from children and pets. Do not open sachets.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoleFresh. Made with care in India.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
