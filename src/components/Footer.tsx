import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube, Code, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-[#E4405F]" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:text-[#FF0000]" },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com", color: "#FFA116" },
  { name: "HackerRank", url: "https://hackerrank.com", color: "#00EA64" },
  { name: "CodeWars", url: "https://codewars.com", color: "#B1361E" },
  { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", color: "#2F8D46" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <motion.a
                href="#home"
                className="text-2xl font-display font-bold gradient-text inline-block"
                whileHover={{ scale: 1.05 }}
              >
                PORTFOLIO
              </motion.a>
              <p className="text-muted-foreground text-sm mt-4 max-w-xs">
                Building digital experiences that inspire and innovate. Let's create something amazing together.
              </p>
            </div>

            {/* Coding Profiles */}
            <div>
              <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Coding Profiles
              </h4>
              <div className="flex flex-wrap gap-3">
                {codingProfiles.map((profile) => (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground text-xs font-heading tracking-wider hover:border-primary/50 transition-colors flex items-center gap-1.5 group"
                    style={{ 
                      "--hover-color": profile.color 
                    } as React.CSSProperties}
                  >
                    {profile.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wider"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-full bg-muted/50 text-muted-foreground ${social.color} transition-all hover:shadow-lg hover:shadow-primary/20`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <p className="text-muted-foreground text-sm font-body">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
