// 2.5_dbLogger.js
// Logging de base de datos para UniDev Cloud (versión compatible web)
// © 2025 Ricardo Pino Peña — Galaxy 15

const dbLogger = {
  logs: [],

  write(event, details = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      details
    };
    this.logs.push(logEntry);
    console.log("[DB-LOG]", event, details);
  },

  read() {
    return [...this.logs];
  },

  clear() {
    this.logs = [];
  }
};

export { dbLogger };
