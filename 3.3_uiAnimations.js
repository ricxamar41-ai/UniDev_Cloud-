// Controlador de animaciones y transiciones visuales de UniDev Cloud.

const UIAnimations = {
  fadeIn: (element, duration = 500) => {
    element.style.opacity = 0;
    element.style.display = "block";
    let opacity = 0;
    const step = 50 / duration;
    const fade = setInterval(() => {
      opacity += step;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(fade);
      }
      element.style.opacity = opacity;
    }, 50);
  },

  fadeOut: (element, duration = 500) => {
    let opacity = 1;
    const step = 50 / duration;
    const fade = setInterval(() => {
      opacity -= step;
      if (opacity <= 0) {
        opacity = 0;
        element.style.display = "none";
        clearInterval(fade);
      }
      element.style.opacity = opacity;
    }, 50);
  },

  slideIn: (element, direction = "left", distance = "100px", duration = 300) => {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = direction === "left" ? `translateX(-${distance})` : `translateX(${distance})`;
    setTimeout(() => {
      element.style.transform = "translateX(0)";
    }, 10);
  },

  bounceIn: (element, duration = 500) => {
    element.style.animation = `bounceIn ${duration}ms ease`;
  }
};

export default UIAnimations;
