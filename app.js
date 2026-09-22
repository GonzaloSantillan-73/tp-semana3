import express from 'express';
import librosRouter from './src/routes/libros.routes.js';
import autoresRouter from './src/routes/autores.routes.js';
import { manejadorErrores } from './src/middlewares/manejadorErrores.js';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a la API REST');
});


// Montar recursos
app.use('/libros', librosRouter);
app.use('/autores', autoresRouter);

// Manejador 404 para rutas no encontradas
app.use((req, res, next) => {
    const error = new Error(`Ruta no encontrada: ${req.method} ${req.originalUrl}`);
    error.status = 404;
    next(error);
});

// Manejador centralizado de errores
app.use(manejadorErrores);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});