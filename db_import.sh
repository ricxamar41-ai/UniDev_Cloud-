# ============================================================
# 🧠 Integración automática de base de datos (MySQL/MariaDB)
# ============================================================
SQL_FILE="./database/unidev_cloud.sql"

if [ -f "$SQL_FILE" ]; then
  echo -e "${BLUE}🧱 Configurando base de datos UniDev Cloud...${RESET}"
  mysql -u root -p < "$SQL_FILE" && \
  echo -e "${GREEN}✅ Base de datos importada correctamente.${RESET}"
else
  echo -e "${YELLOW}⚠️  No se encontró el archivo SQL (${SQL_FILE}). Saltando importación.${RESET}"
fi
