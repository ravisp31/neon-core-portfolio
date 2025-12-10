import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import ParticleBackground from "./ParticleBackground";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ravisp312005@gmail.com", href: "mailto:ravisp312005@gmail.com" },
  { icon: MapPin, label: "Location", value: "Salem, Tamil Nadu", href: "#" },
  { icon: Phone, label: "Phone", value: "+91 6304048427", href: "tel:+916304048427" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />
      <ParticleBackground variant="default" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">Let's Work Together</h2>
          </motion.div>
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a key={item.label} href={item.href} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }} whileHover={{ x: 5 }} className="glass-card p-4 rounded-xl flex items-center gap-4 group block">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><item.icon className="w-5 h-5" /></div>
                  <div><div className="text-xs text-muted-foreground font-heading uppercase">{item.label}</div><div className="text-foreground">{item.value}</div></div>
                </motion.a>
              ))}
              <Button variant="neon" className="w-full mt-4" asChild><a href="mailto:ravisp312005@gmail.com"><Mail className="mr-2 w-4 h-4" />Email Directly</a></Button>
            </div>
            <motion.form initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-sm font-heading uppercase text-muted-foreground mb-2">Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none" placeholder="Your Name" /></div>
                <div><label className="block text-sm font-heading uppercase text-muted-foreground mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none" placeholder="you@example.com" /></div>
              </div>
              <div><label className="block text-sm font-heading uppercase text-muted-foreground mb-2">Subject</label><input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none" placeholder="Project Inquiry" /></div>
              <div><label className="block text-sm font-heading uppercase text-muted-foreground mb-2">Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:border-primary focus:outline-none resize-none" placeholder="Your message..." /></div>
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">{isSubmitting ? <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" /> : <><Send className="w-5 h-5 mr-2" />Send Message</>}</Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
