// 3.5_uiTest.js
// Pruebas funcionales básicas para la UI.

import UICore from './3.1_uiCore.js';
import UIThemeManager from './3.2_uiThemeManager.js';

const UITests = {
  testThemeChange: () => {
    UIThemeManager.toggleTheme();
    console.assert(document.body.getAttribute('data-theme') === 'dark' || document.body.getAttribute('data-theme') === 'light', "Fallo al cambiar el tema");
  },

  testMainViewLoad: () => {
    UICore.loadMainView();
    const appContent = document.getElementById("app").innerHTML;
    console.assert(appContent.includes("UniDev Cloud"), "La vista principal no se cargó correctamente");
  }
};

UITests.testThemeChange();
UITests.testMainViewLoad();
