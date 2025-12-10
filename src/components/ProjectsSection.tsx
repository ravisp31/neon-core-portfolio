import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";

const projects = [
  { 
    title: "Task Manager App", 
    description: "A full-stack task manager where users can sign up, log in, and manage daily tasks. Supports CRUD operations and marking tasks as complete.", 
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", 
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"], 
    liveUrl: "#", 
    githubUrl: "#", 
    color: "primary" 
  },
  { 
    title: "Immersive Zoo and Flower Walk", 
    description: "A Virtual Reality (VR) experience where users can explore virtual animals and flowers using an Oculus headset. The system shows information overlays (pop-up details that appear on top of the scene) to make the experience more interactive and engaging.", 
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop", 
    tags: ["Unity", "Oculus VR", "C#", "3D Modeling"], 
    liveUrl: "#", 
    githubUrl: "#", 
    color: "secondary" 
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-secondary/8 rounded-full blur-[100px]" />
      <ParticleBackground variant="default" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <span className="text-primary font-heading tracking-widest uppercase text-sm">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">My Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.02 }} className="glass-card rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="neon" size="sm" asChild><a href={project.liveUrl}><ExternalLink className="w-4 h-4 mr-1" />Live</a></Button>
                    <Button variant="outline" size="sm" asChild><a href={project.githubUrl}><Github className="w-4 h-4 mr-1" />Code</a></Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">{project.tags.map((tag) => (<span key={tag} className="px-2 py-1 text-xs font-heading tracking-wider rounded-full border border-border/50 text-muted-foreground bg-muted/30">{tag}</span>))}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
