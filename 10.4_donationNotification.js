// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.4_donationNotification.js
//  Versión: v0.8 (corregido)
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

const { donations } = require('./10.1_donationAccess'); // Accede correctamente a donations

// Función para simular el envío de un correo de notificación
function sendDonationNotification(userId, donationAmount) {
    // Simulando el envío de un correo electrónico
    console.log(`📧 Enviando notificación a ${userId} sobre la donación de ${donationAmount} USD.`);
}

// Enviar notificación de donación
function notifyDonation(userId) {
    const userDonation = donations.find(donation => donation.userId === userId);
    
    if (userDonation) {
        sendDonationNotification(userId, userDonation.donationAmount);
    } else {
        console.log(`❌ No se encontró donación para el usuario ${userId}.`);
    }
}

module.exports = { sendDonationNotification, notifyDonation };
