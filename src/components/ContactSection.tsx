import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import ParticleBackground from "./ParticleBackground";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" },
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Particle background */}
      <ParticleBackground variant="subtle" />

      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading tracking-widest uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass-card p-5 rounded-xl flex items-center gap-4 group cursor-pointer block"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-heading uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-foreground font-body mt-1">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="block text-sm font-heading uppercase tracking-wider text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="block text-sm font-heading uppercase tracking-wider text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-sm font-heading uppercase tracking-wider text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
