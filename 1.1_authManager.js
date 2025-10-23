// 1.1_authManager.js
// Módulo 1: Sistema básico de autenticación local para UniDev Cloud (versión reforzada)

const userDB = {
  admin: {
    password: "12345", // Nota: solo para pruebas locales
    role: "superadmin"
  }
};

// Guardar sesión local
function saveSession(username) {
  if (!username) {
    console.warn("⚠️ saveSession: usuario vacío");
    return;
  }
  localStorage.setItem("unidev_user", username);
}

// Obtener sesión
function getSession() {
  return localStorage.getItem("unidev_user");
}

// Iniciar sesión
function login(username, password) {
  if (!username || !password) {
    alert("⚠️ Debes completar todos los campos.");
    return false;
  }

  if (userDB[username] && userDB[username].password === password) {
    saveSession(username);
    alert("✅ Bienvenido " + username + "!");
    return true;
  } else {
    alert("❌ Usuario o contraseña incorrectos");
    return false;
  }
}

// Cerrar sesión
function logout() {
  if (!getSession()) {
    console.warn("⚠️ logout: no hay sesión activa");
  }
  localStorage.removeItem("unidev_user");
  alert("🔒 Sesión cerrada correctamente");
}

// Verificar sesión al cargar
document.addEventListener("DOMContentLoaded", () => {
  const activeUser = getSession();
  if (activeUser) {
    alert("👋 Sesión activa: " + activeUser);
    console.log("Usuario activo:", activeUser);
  } else {
    console.log("Ninguna sesión activa");
  }
});

// Verificar rol del usuario activo
function getUserRole() {
  const username = getSession();
  if (username && userDB[username]) {
    return userDB[username].role;
  }
  return null;
}

// Opcional: función de prueba segura
function testAuthModule() {
  try {
    console.log("🟢 Test módulo autenticación iniciado");
    login("admin", "12345");
    console.log("Rol de usuario:", getUserRole());
    logout();
    console.log("🟢 Test módulo autenticación finalizado");
  } catch (err) {
    console.error("❌ Error en testAuthModule:", err.message);
  }
}

export {
  login,
  logout,
  getSession,
  getUserRole,
  testAuthModule
};
