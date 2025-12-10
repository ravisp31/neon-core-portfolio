import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Scene3D from "./Scene3D";
import ParticleBackground from "./ParticleBackground";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ravisp", color: "hover:text-[#0A66C2]" },
  { name: "GitHub", icon: Github, url: "https://github.com/ravisp", color: "hover:text-foreground" },
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      {/* 3D Scene */}
      <Scene3D />

      {/* Particles */}
      <ParticleBackground variant="hero" />

      {/* Content - Centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block gradient-text neon-text mt-2">
            Ravi SP
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl text-foreground/70 font-heading mb-10"
        >
          B.E Computer Science and Design Student
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 animate-bounce" />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#contact">
              <Mail className="mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button variant="neon" size="lg" asChild>
            <a href="/Ravi_SP_Resume.pdf" download>
              <Download className="mr-2" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full bg-muted/30 text-muted-foreground ${social.color} transition-all hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm border border-border/30`}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              title={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
