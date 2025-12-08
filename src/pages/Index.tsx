import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background overflow-x-hidden"
      >
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
