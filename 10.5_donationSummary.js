// ==========================================================
//  Módulo 10 – Donaciones y Control de Acceso
//  Archivo: 10.5_donationSummary.js
//  Versión: v0.8 (corregido)
//  Desarrollador principal: Ricardo Pino Peña
//  Año: 2025
// ==========================================================

const { donations } = require('./10.1_donationAccess');

// ✅ Calcula el total de donaciones realizadas
function getTotalDonations() {
    if (donations.length === 0) {
        console.log('⚠️ No hay donaciones registradas.');
        return 0;
    }

    const total = donations.reduce((sum, donation) => sum + donation.donationAmount, 0);
    console.log(`💰 Total de donaciones recibidas: ${total} USD`);
    return total;
}

// ✅ Calcula el resumen de donaciones agrupadas por usuario
function getDonationSummaryByUser() {
    if (donations.length === 0) {
        console.log('⚠️ No hay donaciones para mostrar.');
        return {};
    }

    const summary = donations.reduce((acc, donation) => {
        if (!acc[donation.userId]) {
            acc[donation.userId] = 0;
        }
        acc[donation.userId] += donation.donationAmount;
        return acc;
    }, {});

    console.log('📊 Resumen de donaciones por usuario:');
    for (const [user, total] of Object.entries(summary)) {
        console.log(`   - ${user}: ${total} USD`);
    }

    return summary;
}

// ✅ Exportar las funciones
module.exports = { getTotalDonations, getDonationSummaryByUser };
