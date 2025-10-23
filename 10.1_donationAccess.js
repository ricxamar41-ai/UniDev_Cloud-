// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.1_donationAccess.js
//  Versión: v0.8 (corregido)
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

// Dependencias necesarias
const fs = require('fs');
const path = require('path');

// Simulación de donación para acceso
let donations = [];

// Función para registrar una donación
function recordDonation(userId, donationAmount) {
    const timestamp = new Date().toISOString();
    const donation = { userId, donationAmount, timestamp };
    donations.push(donation);

    console.log(`Donación registrada: ${donationAmount} USD por el usuario ${userId} en ${timestamp}`);
}

// Función para verificar acceso según la donación
function checkAccess(userId) {
    const userDonations = donations.filter(donation => donation.userId === userId);
    const totalDonations = userDonations.reduce((sum, donation) => sum + donation.donationAmount, 0);

    if (totalDonations >= 50) { // Acceso completo por donación >= 50 USD
        console.log(`El usuario ${userId} tiene acceso completo.`);
        return true;
    } else if (totalDonations >= 20) { // Acceso limitado por donación >= 20 USD
        console.log(`El usuario ${userId} tiene acceso limitado.`);
        return true;
    } else {
        console.log(`El usuario ${userId} no tiene acceso.`);
        return false;
    }
}

// Función para manejar el acceso a módulos
function grantModuleAccess(userId) {
    if (checkAccess(userId)) {
        console.log(`Acceso concedido al usuario ${userId} para los módulos correspondientes.`);
    } else {
        console.log(`Acceso denegado al usuario ${userId}.`);
    }
}

// ✅ Exportar todo lo necesario para los demás módulos
module.exports = { donations, recordDonation, checkAccess, grantModuleAccess };
// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.1_donationAccess.js
//  Versión: v0.7
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

// Dependencias necesarias
const fs = require('fs');
const path = require('path');

// Simulación de donación para acceso
let donations = [];

// Función para registrar una donación
function recordDonation(userId, donationAmount) {
    const timestamp = new Date().toISOString();
    const donation = { userId, donationAmount, timestamp };
    donations.push(donation);

    console.log(`Donación registrada: ${donationAmount} USD por el usuario ${userId} en ${timestamp}`);
}

// Función para verificar acceso según la donación
function checkAccess(userId) {
    const userDonations = donations.filter(donation => donation.userId === userId);
    const totalDonations = userDonations.reduce((sum, donation) => sum + donation.donationAmount, 0);

    if (totalDonations >= 50) { // Acceso completo por donación >= 50 USD
        console.log(`El usuario ${userId} tiene acceso completo.`);
        return true;
    } else if (totalDonations >= 20) { // Acceso limitado por donación >= 20 USD
        console.log(`El usuario ${userId} tiene acceso limitado.`);
        return true;
    } else {
        console.log(`El usuario ${userId} no tiene acceso.`);
        return false;
    }
}

// Función para manejar el acceso a módulos
function grantModuleAccess(userId) {
    if (checkAccess(userId)) {
        // Aquí se habilitarían los módulos a los que el usuario tiene acceso
        console.log(`Acceso concedido al usuario ${userId} para los módulos correspondientes.`);
    } else {
        console.log(`Acceso denegado al usuario ${userId}.`);
    }
}

module.exports = { recordDonation, checkAccess, grantModuleAccess };
