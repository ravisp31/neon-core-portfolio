import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const skillCategories = [
  { title: "Languages", color: "primary", skills: [{ name: "Java", level: 85 }, { name: "HTML", level: 90 }, { name: "CSS", level: 85 }, { name: "JavaScript", level: 80 }] },
  { title: "Frameworks", color: "secondary", skills: [{ name: "ReactJS", level: 80 }, { name: "Node.js", level: 70 }, { name: "Express", level: 70 }, { name: "Tailwind", level: 75 }] },
  { title: "Tools & DB", color: "accent", skills: [{ name: "MySQL", level: 75 }, { name: "MongoDB", level: 70 }, { name: "Git", level: 80 }, { name: "VS Code", level: 90 }] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">Skills & Technologies</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, ci) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: ci * 0.2 }} className="glass-card p-8 rounded-2xl">
                <h3 className={`text-xl font-display font-bold mb-6 text-${cat.color}`}>{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1"><span className="font-heading text-foreground text-sm">{skill.name}</span><span className="text-muted-foreground text-xs">{skill.level}%</span></div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${skill.level}%` } : {}} transition={{ delay: ci * 0.2 + si * 0.1 + 0.3, duration: 0.8 }} className={`h-full rounded-full bg-gradient-to-r ${cat.color === "primary" ? "from-primary to-primary/50" : cat.color === "secondary" ? "from-secondary to-secondary/50" : "from-accent to-accent/50"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} className="mt-12 glass-card p-8 rounded-2xl text-center max-w-xl mx-auto border border-primary/20">
            <Briefcase className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Available for Opportunities</h3>
            <p className="text-muted-foreground text-sm mb-4">Open to internships, collaborative projects, and freelance work.</p>
            <Button variant="hero" asChild><a href="#contact">Get In Touch</a></Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
