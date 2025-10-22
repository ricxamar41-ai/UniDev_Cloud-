// Datos de ejemplo
const donations = [
  { userId: "user01", donationAmount: 25, timestamp: "2025-10-12T12:00:00" },
  { userId: "user02", donationAmount: 55, timestamp: "2025-10-11T11:30:00" },
  { userId: "user03", donationAmount: 15, timestamp: "2025-10-10T09:45:00" },
];

// Mostrar las donaciones
function displayDonations() {
  const tableBody = document.querySelector("#donation-table tbody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  donations.forEach(donation => {
    const row = document.createElement("tr");

    const userCell = document.createElement("td");
    userCell.textContent = donation.userId;

    const donationCell = document.createElement("td");
    donationCell.textContent = `${donation.donationAmount} USD`;

    const accessCell = document.createElement("td");
    accessCell.textContent = getAccessLevel(donation.donationAmount);

    row.appendChild(userCell);
    row.appendChild(donationCell);
    row.appendChild(accessCell);
    tableBody.appendChild(row);
  });
}

// Determinar nivel de acceso
function getAccessLevel(amount) {
  if (amount >= 50) return "Acceso Completo";
  if (amount >= 20) return "Acceso Limitado";
  return "Sin Acceso";
}

// Mostrar total
function displayTotalDonations() {
  const total = donations.reduce((sum, d) => sum + d.donationAmount, 0);
  document.querySelector("#total-donations").textContent = `${total} USD`;
}

// Inicializar después de cargar todo
document.addEventListener("DOMContentLoaded", () => {
  displayDonations();
  displayTotalDonations();
});
