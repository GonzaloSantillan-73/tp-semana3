import express from 'express';
import autoresRouter from './src/routes/autores.routes.js';
import { manejadorErrores } from './src/middlewares/manejadorErrores.js';

const app = express();
app.use(express.json());

const PORT = 3000;

const libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1949 },
];


app.get('/', (req, res) => {
    res.send('Bienvenido a la API REST');
});

app.get('/info', (req, res) => {
    res.json({
        nombre: 'API REST',
        version: '1.0.0',
        autor: 'Tu Nombre',
        estado: 'En desarrollo'
    });
});


app.use('/autores', autoresRouter);

app.use((req, res, next) => {
    const error = new Error(`Ruta no encontrada: ${req.method} ${req.originalUrl}`);
    error.status = 404;
    next(error);
});

app.use(manejadorErrores);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});