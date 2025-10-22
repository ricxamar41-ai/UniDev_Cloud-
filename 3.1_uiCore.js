import UIThemeManager from './3.2_uiThemeManager.js';
import UIAnimations from './3.3_uiAnimations.js';

const UICore = {
  // Función de inicialización
  init: () => {
    console.log("🎨 Iniciando interfaz de usuario...");
    
    // Cargar el tema guardado al iniciar
    UIThemeManager.loadTheme();
    
    // Cargar la vista principal
    UICore.loadMainView();
  },

  // Cargar la vista principal
  loadMainView: () => {
    const app = document.getElementById("app");

    if (!app) {
      console.error("❌ No se encontró el contenedor #app.");
      return;
    }

    console.log("🔄 Cargando vista principal...");

    // Inyectar el contenido HTML dentro de #app
    app.innerHTML = `
      <div class="unidev-container">
        <h1>🌐 UniDev Cloud</h1>
        <p>Plataforma híbrida — Web + APK</p>
        <button id="startProject" class="btn-primary">🚀 Iniciar proyecto</button>
        <button id="toggleTheme" class="btn-secondary">🌙 Cambiar tema</button>
      </div>
    `;

    // Agregar eventos a los botones
    const startBtn = document.getElementById("startProject");
    const themeBtn = document.getElementById("toggleTheme");

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        alert("Proyecto iniciado con éxito ✅");
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        UIThemeManager.toggleTheme();
        UIAnimations.fadeIn(app, 500);  // Animación al cambiar el tema
      });
    }
  }
};

// Inicializar la UI
UICore.init();
