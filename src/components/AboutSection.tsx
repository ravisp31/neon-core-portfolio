import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Zap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

const highlights = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable code" },
  { icon: Palette, title: "Creative Design", description: "Crafting beautiful user interfaces" },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Zap, title: "Innovation", description: "Embracing cutting-edge technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Crafting Digital Experiences
                </h3>
                <div className="space-y-4 text-muted-foreground font-body">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience
                    in building web applications that combine stunning design with
                    powerful functionality.
                  </p>
                  <p>
                    My journey in tech began with a curiosity for how things work, which
                    evolved into a deep love for creating digital solutions that make a
                    real impact.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies,
                    contributing to open-source projects, or sharing knowledge with the
                    developer community.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border/50">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="text-center"
                    >
                      <div className="text-3xl font-display font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-heading uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-5 group cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
