"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const ParticlesComponent = (props) => {
  const { theme, systemTheme } = useTheme();
  const [key, setKey] = useState(true);

  const calculateColor = () => {
    if (theme === "system") {
      if (systemTheme === "dark") {
        return "#FFFFFF";
      } else if (systemTheme === "light") {
        return "#000000";
      }
    } else if (theme === "dark") {
      return "#FFFFFF";
    } else if (theme === "light") {
      return "#000000";
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  useEffect(() => {
    calculateColor();
    setKey((prevKey) => !prevKey);
  }, [theme]);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: calculateColor(),
        },
        links: {
          color: calculateColor(),
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return <Particles key={key.toString()} id={props.id} options={options} />;
};

export default ParticlesComponent;
