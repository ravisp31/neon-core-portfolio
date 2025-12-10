import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Calendar, X } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const certifications = [
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "September 2024",
    color: "primary",
    imageUrl: "/certificates/java_foundation_certificate.png",
  },
  {
    title: "Unity Certified Associate: Game Developer",
    issuer: "Unity Technologies",
    date: "June 2025",
    color: "secondary",
    imageUrl: "/certificates/unity_game_developer_certificate.png",
  },
  {
    title: "Design & Implementation of Human-Computer Interfaces",
    issuer: "NPTEL (IIT Guwahati)",
    date: "Jul-Oct 2024",
    color: "accent",
    imageUrl: "/certificates/nptel_hci_certificate.png",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-primary/8 rounded-full blur-[100px]" />
      <ParticleBackground variant="default" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">Professional Development</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-muted/30">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className={`w-10 h-10 mb-3 rounded-lg flex items-center justify-center ${
                  cert.color === "primary" 
                    ? "bg-primary/10" 
                    : cert.color === "secondary" 
                    ? "bg-secondary/10" 
                    : "bg-accent/10"
                }`}>
                  <Award className={`w-5 h-5 ${
                    cert.color === "primary" 
                      ? "text-primary" 
                      : cert.color === "secondary" 
                      ? "text-secondary" 
                      : "text-accent"
                  }`} />
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-2 leading-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground/70 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificationsSection;
