// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.3_donationReport.js
//  Versión: v0.8 (corregido)
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

const fs = require('fs');
const { donations } = require('./10.1_donationAccess'); // Accede correctamente a donations

// Generar reporte de donaciones
function generateDonationReport() {
    if (donations.length === 0) {
        console.log('❌ No hay donaciones registradas.');
        return;
    }

    const report = donations.map(donation => {
        return `Usuario: ${donation.userId}, Donación: ${donation.donationAmount} USD, Fecha: ${donation.timestamp}`;
    }).join('\n');

    try {
        fs.writeFileSync('donationReport.txt', report);
        console.log('✅ Reporte de donaciones generado: donationReport.txt');
    } catch (error) {
        console.error('⚠️ Error al generar el reporte:', error);
    }
}

// Mostrar las donaciones en consola
function showDonationReport() {
    if (donations.length === 0) {
        console.log('❌ No hay donaciones registradas.');
        return;
    }

    donations.forEach(donation => {
        console.log(`Usuario: ${donation.userId}, Donación: ${donation.donationAmount} USD, Fecha: ${donation.timestamp}`);
    });
}

module.exports = { generateDonationReport, showDonationReport };
