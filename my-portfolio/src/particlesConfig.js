export const particlesOptions = {
  
  fpsLimit: 120,

  background: {
    color: {
      value: "#000000"
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 0
  },

  particles: {
    color: {
      value: "#b3b3b3"
    },
    links: {
      color: "#00a62c",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
};
