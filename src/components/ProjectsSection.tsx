import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    color: "primary",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered platform for generating marketing content, blog posts, and social media captions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    color: "secondary",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization and custom reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "WebSocket", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "accent",
  },
  {
    title: "Social Media App",
    description:
      "A mobile-first social platform with real-time messaging, stories, and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "primary",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="glass-card rounded-2xl overflow-hidden h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Overlay buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 backdrop-blur-sm"
          >
            <Button variant="neon" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`text-xl font-display font-bold text-foreground group-hover:text-${project.color} transition-colors`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-heading tracking-wider uppercase rounded-full border border-border/50 text-muted-foreground bg-muted/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl pointer-events-none`}
          animate={{
            boxShadow: isHovered
              ? `0 0 40px hsl(var(--${project.color}) / 0.3), inset 0 0 20px hsl(var(--${project.color}) / 0.1)`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

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
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
              My Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A selection of projects that showcase my skills in building modern,
              scalable applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="gradient" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
