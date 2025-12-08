import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a href="#home" className="text-xl font-display font-bold gradient-text" whileHover={{ scale: 1.05 }}>RAVI SP</motion.a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (<motion.a key={link.name} href={link.href} className="font-heading text-sm uppercase tracking-widest text-muted-foreground hover:text-primary" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>{link.name}</motion.a>))}
          <Button variant="neon" size="sm" asChild><a href="/assets/Ravi_SP_Resume.pdf" download><Download className="w-4 h-4 mr-1" />Resume</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X /> : <Menu />}</Button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (<a key={link.name} href={link.href} className="font-heading text-lg uppercase text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>))}
            <Button variant="neon" asChild><a href="/assets/Ravi_SP_Resume.pdf" download><Download className="w-4 h-4 mr-2" />Resume</a></Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
