// Archivo: scripts/unidev_all.js
// Lógica principal del frontend para UniDev Cloud — versión PRO v1.0
// © 2025 Ricardo Pino Peña

console.log("🚀 Iniciando UniDev Cloud v1.0...");

document.addEventListener("DOMContentLoaded", () => {
  applyBaseStyles();
  const ui = buildUI();
  attachListeners(ui);
  console.info("✅ UniDev Cloud listo para usar.");
});

/* ==============================
   🎨 Estilos base dinámicos
============================== */
function applyBaseStyles() {
  document.documentElement.style.scrollBehavior = "smooth";
  document.body.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: system-ui, sans-serif;
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    margin: 0;
    overflow-x: hidden;
    transition: background 0.3s ease;
  `;
}

/* ==============================
   🧱 Construcción de UI principal
============================== */
function buildUI() {
  const container = document.createElement("div");
  container.id = "app-container";
  Object.assign(container.style, { textAlign: "center", padding: "20px" });

  const title = createElement("h1", "🌐 UniDev Cloud", {
    fontSize: "2.2rem",
    color: "#1e293b",
    marginBottom: "10px",
  });

  const subtitle = createElement("p", "Plataforma híbrida — Web + APK", {
    fontSize: "1.1rem",
    color: "#475569",
    marginBottom: "40px",
  });

  const startButton = createButton("Iniciar proyecto", startProject);

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p style="margin-top:50px;color:#64748b;font-size:0.9rem;">
      © 2025 UniDev Cloud | Desarrollado por Ricardo Pino Peña
    </p>
  `;

  container.append(title, subtitle, startButton, footer);
  document.body.append(container);

  return { startButton };
}

/* ==============================
   🧩 Utilidades de interfaz
============================== */
function createElement(tag, text, styles = {}) {
  const el = document.createElement(tag);
  el.textContent = text;
  Object.assign(el.style, styles);
  return el;
}

function createButton(label, onClick) {
  const btn = document.createElement("button");
  btn.textContent = label;
  Object.assign(btn.style, {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 28px",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });
  btn.addEventListener("mouseenter", () => (btn.style.background = "#1d4ed8"));
  btn.addEventListener("mouseleave", () => (btn.style.background = "#2563eb"));
  btn.addEventListener("click", onClick);
  return btn;
}

/* ==============================
   ⚙️ Lógica de inicio del proyecto
============================== */
function startProject(e) {
  const btn = e.target;
  btn.disabled = true;
  btn.textContent = "🚀 Iniciando...";

  setTimeout(() => {
    showNotification("✅ Proyecto iniciado con éxito en UniDev Cloud", "success");
    btn.textContent = "Iniciar proyecto";
    btn.disabled = false;
  }, 1000);
}

/* ==============================
   🔔 Sistema de notificaciones
============================== */
function showNotification(message, type = "info") {
  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    info: "#2563eb",
  };

  const box = document.createElement("div");
  Object.assign(box.style, {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    background: colors[type] || colors.info,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
    opacity: "0",
    transition: "opacity 0.4s ease, transform 0.4s ease",
    zIndex: "1000",
  });
  box.textContent = message;
  document.body.append(box);

  requestAnimationFrame(() => {
    box.style.opacity = "1";
    box.style.transform = "translate(-50%, 0)";
  });

  setTimeout(() => {
    box.style.opacity = "0";
    box.style.transform = "translate(-50%, 20px)";
    setTimeout(() => box.remove(), 500);
  }, 3000);
}

/* ==============================
   🧠 Manejadores de eventos
============================== */
function attachListeners(ui) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") ui.startButton.click();
  });
}
