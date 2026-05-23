const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static('public'));

// Middleware para formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
    🚀 Servidor corriendo!
    📍 Abre tu navegador en: http://localhost:${PORT}
    🧮 Proyecto Cálculo I - Beto el Numérico
    `);
});