import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/solefresh-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding bg-background border-t border-border relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(142 71% 45%) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="SoleFresh" className="h-10 md:h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-6">
              Fresh shoes. Every day.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/80 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@solefresh.in"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/80 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/80 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-foreground font-bold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-4">
              {[
                {
                  label: "Shop",
                  href: "https://solefreshofficial.github.io/Solefresh-shoe-Deodorizer/",
                  external: true,
                },
                { label: "How It Works", href: "#science" },
                { label: "Ingredients", href: "#ingredients" },
                { label: "Product Details", href: "#details" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Safety note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-foreground font-bold mb-6 text-lg">Safety</h4>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                For external use only. Keep away from children and pets. Do not
                open sachets. Store in a cool, dry place. If contact occurs with
                eyes, rinse immediately.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoleFresh. Made with ❤️ in India.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Natural • Reusable • Chemical-Free
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;