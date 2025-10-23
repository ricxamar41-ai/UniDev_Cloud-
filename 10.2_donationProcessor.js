// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.2_donationProcessor.js
//  Versión: v0.8 (corregido)
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

const { recordDonation, checkAccess } = require('./10.1_donationAccess');

// Procesar una nueva donación
function processDonation(userId, donationAmount) {
    try {
        if (!userId || typeof userId !== 'string') {
            console.log('❌ Usuario no válido.');
            return;
        }

        if (typeof donationAmount !== 'number' || donationAmount <= 0) {
            console.log(`❌ Monto de donación no válido: ${donationAmount}`);
            return;
        }

        recordDonation(userId, donationAmount);
        console.log(`✅ Donación de ${donationAmount} USD procesada para ${userId}.`);
        checkAccess(userId);

        // 🟤 *Sugerencia:* podrías llamar aquí a generateDonationReport()
        // para registrar automáticamente cada nueva donación.
    } catch (error) {
        console.error('⚠️ Error al procesar la donación:', error);
    }
}

// Verificar estado de acceso de un usuario
function donationStatus(userId) {
    if (!userId) return console.log('❌ Falta el ID de usuario.');
    checkAccess(userId);
}

module.exports = { processDonation, donationStatus };
// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.2_donationProcessor.js
//  Versión: v0.7
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

// Dependencias necesarias
const { recordDonation, checkAccess } = require('./10.1_donationAccess');

// Simulación de procesador de donación
function processDonation(userId, donationAmount) {
    if (donationAmount > 0) {
        recordDonation(userId, donationAmount);
        console.log(`Procesando donación de ${donationAmount} USD del usuario ${userId}.`);
    } else {
        console.log(`Monto de donación no válido para el usuario ${userId}.`);
    }
}

// Función para mostrar el estatus del acceso por donación
function donationStatus(userId) {
    if (checkAccess(userId)) {
        console.log(`El usuario ${userId} tiene acceso adecuado según sus donaciones.`);
    } else {
        console.log(`El usuario ${userId} no tiene acceso suficiente.`);
    }
}

// Exportar funciones
module.exports = { processDonation, donationStatus };
