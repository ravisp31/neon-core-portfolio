import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "primary",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    color: "secondary",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    color: "accent",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading tracking-widest uppercase text-sm">
              My Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-2xl group"
              >
                <h3 className={`text-xl font-display font-bold mb-8 text-${category.color}`}>
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.4,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-heading text-foreground text-sm tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-xs font-body">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.color === "primary"
                              ? "from-primary to-primary/50"
                              : category.color === "secondary"
                              ? "from-secondary to-secondary/50"
                              : "from-accent to-accent/50"
                          }`}
                          style={{
                            boxShadow:
                              category.color === "primary"
                                ? "0 0 10px hsl(var(--primary) / 0.5)"
                                : category.color === "secondary"
                                ? "0 0 10px hsl(var(--secondary) / 0.5)"
                                : "0 0 10px hsl(var(--accent) / 0.5)",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "GraphQL", "MongoDB"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground text-sm font-heading tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
