import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "September 2024",
    color: "primary",
    pdfUrl: "/certificates/java_foundation_certificate.pdf",
  },
  {
    title: "Unity Certified Associate: Game Developer",
    issuer: "Unity Technologies",
    date: "June 2025",
    color: "secondary",
    pdfUrl: "/certificates/unity_game_developer_certificate.pdf",
  },
  {
    title: "Design & Implementation of Human-Computer Interfaces",
    issuer: "NPTEL (IIT Guwahati)",
    date: "Jul-Oct 2024",
    color: "accent",
    pdfUrl: "/certificates/nptel_hci_certificate.pdf",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4">
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
                className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${
                  cert.color === "primary" 
                    ? "bg-primary/10" 
                    : cert.color === "secondary" 
                    ? "bg-secondary/10" 
                    : "bg-accent/10"
                }`}>
                  <Award className={`w-6 h-6 ${
                    cert.color === "primary" 
                      ? "text-primary" 
                      : cert.color === "secondary" 
                      ? "text-secondary" 
                      : "text-accent"
                  }`} />
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-2 leading-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground/70 text-xs mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
