import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink, PenLine } from "lucide-react";
import { Button } from "./ui/button";

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading tracking-widest uppercase text-sm">
              Thoughts & Writings
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
              Featured Articles
            </h2>
          </motion.div>

          {/* Empty state placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <FileText className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              No Articles Yet
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              I'm working on sharing my knowledge and experiences. Check back soon for articles 
              on web development, system design, and tech insights!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" asChild>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                  <PenLine className="mr-2 w-4 h-4" />
                  Start Writing
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Visit Dev.to
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Placeholder cards for future articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl opacity-40 border border-dashed border-border/50"
              >
                <div className="h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <div className="h-4 bg-muted/30 rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted/30 rounded w-full mb-1" />
                <div className="h-3 bg-muted/30 rounded w-2/3" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
