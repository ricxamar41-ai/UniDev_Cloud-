// 3.4_uiRouter.js
// Controlador de rutas para la interfaz de usuario (Web + APK).

const UIRouter = {
  navigateTo: (page) => {
    switch (page) {
      case 'home':
        console.log('Navegando a la página de inicio');
        break;
      case 'settings':
        console.log('Navegando a configuración');
        break;
      default:
        console.log('Página no encontrada');
    }
  }
};

export default UIRouter;
