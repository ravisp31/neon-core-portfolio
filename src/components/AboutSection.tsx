import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Download } from "lucide-react";
import { Button } from "./ui/button";


const education = [
  { degree: "B.Tech Computer Science and Design", institution: "Sona College of Technology, Salem", period: "2022 – 2026", grade: "CGPA 7.36", current: true },
  { degree: "Higher Secondary (12th)", institution: "SRV Boys Higher Secondary School, Rasipuram", period: "2022", grade: "82%", current: false },
  { degree: "Secondary School (10th)", institution: "Government Higher Secondary School, Salem", period: "2020", grade: "72%", current: false },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">About Me</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="glass-card p-8 rounded-2xl mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                <span className="text-4xl font-display font-bold gradient-text">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Ravi SP</h3>
                <p className="text-muted-foreground">Passionate final-year Computer Science and Design student with skills in software development, problem-solving and system design. Trained in programming languages and technologies and eager to apply knowledge to create efficient and creative solutions. A collaborative team player with good communication skills and eager to learn.</p>
                <Button variant="neon" size="sm" className="mt-4" asChild><a href="/assets/Ravi_SP_Resume.pdf" download><Download className="w-4 h-4 mr-2" />Download Resume</a></Button>
              </div>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }} className={`glass-card p-5 rounded-xl ${edu.current ? 'border border-primary/30' : ''}`}>
                  {edu.current && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded font-heading uppercase">Current</span>}
                  <h4 className="font-display font-bold text-foreground mt-1">{edu.degree}</h4>
                  <p className="text-primary text-sm">{edu.institution}</p>
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</span>
                    <span className="px-2 py-0.5 bg-accent/20 text-accent rounded">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
