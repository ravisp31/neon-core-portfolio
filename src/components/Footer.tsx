import { motion } from "framer-motion";
import { Github, Linkedin, Code, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ravisp", color: "hover:text-[#0A66C2]" },
  { name: "GitHub", icon: Github, url: "https://github.com/ravisp", color: "hover:text-foreground" },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/ravisp" },
  { name: "HackerRank", url: "https://hackerrank.com/ravisp" },
  { name: "GeeksforGeeks", url: "https://geeksforgeeks.org/user/ravisp" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <motion.a href="#home" className="text-xl font-display font-bold gradient-text inline-block" whileHover={{ scale: 1.05 }}>RAVI SP</motion.a>
            <p className="text-muted-foreground text-sm mt-3">Final-year CS & Design student building creative software solutions.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:ravisp312005@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4" />ravisp312005@gmail.com</a>
              <a href="tel:+916304048427" className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4" />+91 6304048427</a>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />Salem, Tamil Nadu</div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-3 flex items-center gap-2"><Code className="w-4 h-4 text-primary" />Coding</h4>
            <div className="flex flex-wrap gap-2">
              {codingProfiles.map((p) => (<motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="px-2 py-1 rounded-full border border-border/50 bg-muted/30 text-muted-foreground text-xs font-heading hover:border-primary/50 flex items-center gap-1">{p.name}<ExternalLink className="w-3 h-3" /></motion.a>))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground mb-3">Links</h4>
            <div className="grid grid-cols-2 gap-1">{["About", "Skills", "Projects", "Contact"].map((l) => (<motion.a key={l} href={`#${l.toLowerCase()}`} whileHover={{ x: 3 }} className="text-muted-foreground hover:text-primary text-sm font-heading">{l}</motion.a>))}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30">
          <div className="flex items-center gap-3">{socialLinks.map((s) => (<motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} className={`p-2 rounded-full bg-muted/50 text-muted-foreground ${s.color}`}><s.icon className="w-4 h-4" /></motion.a>))}</div>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ravi SP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
