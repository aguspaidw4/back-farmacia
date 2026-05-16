

//1. Importamos los modulos necesarios para la app
const express = require('express'); // para crear el back
const dotenv = require('dotenv'); // para cargar variables de entorno
const path = require('path'); // para manejar rutas de archivos


// 2. creamos una insstancia de la aplicacion Express
const app = express();


dotenv.config(); // Cargamos las variables de entorno desde el archivo .env


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Enviamos el archivo index.html al cliente
});

// 3. Iniciamos el servidor en el puerto especificado en las variables de entorno
const PORT = process.env.PORT || 3000; // Usamos el puerto definido en .env o el 3000 por defecto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
