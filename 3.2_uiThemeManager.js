// Módulo encargado de gestionar los temas (modo claro/oscuro) de UniDev Cloud.

const UIThemeManager = {
  theme: "light",

  // Alternar entre modo claro y oscuro
  toggleTheme: () => {
    UIThemeManager.theme = UIThemeManager.theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", UIThemeManager.theme);
    localStorage.setItem("theme", UIThemeManager.theme);
    console.log(`🎨 Tema cambiado a: ${UIThemeManager.theme}`);
  },

  // Cargar el tema guardado
  loadTheme: () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      UIThemeManager.theme = savedTheme;
      document.body.setAttribute("data-theme", savedTheme);
    }
  }
};

export default UIThemeManager;
