// 2.4_dataValidator.js
// Validador de datos genérico para UniDev Cloud
// © 2025 Ricardo Pino Peña — Galaxy 15

export const dataValidator = {
  isValidType(value, type) {
    switch (type) {
      case "string": return typeof value === "string";
      case "number": return typeof value === "number" && !isNaN(value);
      case "boolean": return typeof value === "boolean";
      case "object": return typeof value === "object" && value !== null && !Array.isArray(value);
      case "array": return Array.isArray(value);
      default: return false;
    }
  },

  cleanData(record) {
    if (typeof record !== "object" || record === null) return {};
    const cleaned = {};
    for (const key in record) {
      if (record[key] !== null && record[key] !== undefined && record[key] !== "") {
        cleaned[key] = record[key];
      }
    }
    return cleaned;
  },

  validateRecord(record, schema) {
    const cleaned = this.cleanData(record);
    for (const field in schema) {
      if (!this.isValidType(cleaned[field], schema[field])) {
        throw new Error(`Campo inválido: ${field} debe ser tipo ${schema[field]}`);
      }
    }
    return cleaned;
  }
};
