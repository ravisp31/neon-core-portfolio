import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Scene3D from "./Scene3D";
import ParticleBackground from "./ParticleBackground";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ravisp", color: "hover:text-[#0A66C2]" },
  { name: "GitHub", icon: Github, url: "https://github.com/ravisp", color: "hover:text-foreground" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-[#E4405F]" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:text-[#FF0000]" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
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

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-heading tracking-widest uppercase backdrop-blur-sm">
                Software Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text neon-text mt-2">
                Ravi SP
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 font-body"
            >
              Final-Year Computer Science & Design Student
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground/80 max-w-xl mb-8 font-body"
            >
              Software Developer | System Design | React — Building efficient, creative software solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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
                <a href="/assets/Ravi_SP_Resume.pdf" download>
                  <Download className="mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center lg:justify-start gap-4"
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
          </div>

          {/* Right - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Profile image placeholder */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-8xl font-display font-bold gradient-text">R</span>
                </div>
                {/* Replace the div above with this when you have an actual image:
                <img 
                  src="/assets/ravi-profile.jpg" 
                  alt="Ravi SP" 
                  className="w-full h-full object-cover"
                /> 
                */}
              </div>

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute inset-0 border border-secondary/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.35 }}
              />
            </motion.div>
          </motion.div>
        </div>
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
