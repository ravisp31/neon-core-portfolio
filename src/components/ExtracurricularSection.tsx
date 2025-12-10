import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Shield } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const activities = [
  {
    icon: Shield,
    title: "NCC Cadet",
    description: "Completed 'B' and 'C' Certificates under National Cadet Corps.",
  },
  {
    icon: Target,
    title: "Official NCC Camps",
    description: "Attended 4 official NCC camps, including Ek Bharat Shreshtha Bharat (EBSB) Camp and Combined Annual Training Camp.",
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Developed strong leadership, discipline, and teamwork skills through drills, parades, and social service activities.",
  },
];

const ExtracurricularSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="extracurricular" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px]" />
      <ParticleBackground variant="default" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">Beyond Academics</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">Extracurricular Activities</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 rounded-2xl text-center group hover:border-primary/30 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                >
                  <activity.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          {/* NCC Certificates Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display font-bold text-foreground">NCC Certificates</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="/certificates/ncc_b_certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <img
                  src="/certificates/ncc_b_certificate.jpg"
                  alt="NCC B Certificate"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-heading">Certificate B</span>
                </div>
              </motion.a>
              <motion.a
                href="/certificates/ncc_c_certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <img
                  src="/certificates/ncc_c_certificate.jpg"
                  alt="NCC C Certificate"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-heading">Certificate C</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
