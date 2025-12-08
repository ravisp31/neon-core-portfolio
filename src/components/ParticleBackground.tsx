import { useCallback, useMemo, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  variant?: "default" | "hero" | "subtle";
}

const ParticleBackground = ({ variant = "default" }: ParticleBackgroundProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const baseConfig: ISourceOptions = {
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#00f5ff", "#ff00ff", "#8b5cf6"],
        },
        links: {
          color: "#00f5ff",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: variant === "hero" ? 1.5 : 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: variant === "hero" ? 80 : variant === "subtle" ? 30 : 50,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    };

    return baseConfig;
  }, [variant]);

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0 -z-10"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticleBackground;
