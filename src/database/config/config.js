require('dotenv').config();

module.exports = {
  "development": {
    use_env_variable: "DATABASE_URI_DEV",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Agregar esta línea para no verificar el certificado SSL
      }
    
  },
  "test": {
    // Configuración para entorno de prueba
  },
  "production": {
    // Configuración para entorno de producción
  }
}

}