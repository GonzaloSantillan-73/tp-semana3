import { libros } from '../data/libros.js';

export const obtenerLibros = (req, res) => {
    const { autor, anio } = req.query;
    let resultado = libros;

    if (autor) {
        resultado = resultado.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
    }
    if (anio) {
        resultado = resultado.filter(l => l.anio === Number(anio));
    }
    res.json(resultado);
};

export const obtenerLibroPorId = (req, res, next) => {
    const libro = libros.find(l => l.id === req.idValidado);
    if (!libro) {
        const error = new Error(`No existe un libro con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }
    res.json(libro);
};

export const crearLibro = (req, res, next) => {
    const { titulo, autor, anio } = req.body;
    if (!titulo || !autor) {
        const error = new Error('Faltan datos obligatorios: titulo y autor son requeridos');
        error.status = 400;
        return next(error);
    }
    const nuevoId = libros.length > 0 ? Math.max(...libros.map(l => l.id)) + 1 : 1;
    const nuevoLibro = { id: nuevoId, titulo, autor, anio: anio ?? null };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

export const actualizarLibro = (req, res, next) => {
    const libro = libros.find(l => l.id === req.idValidado);
    if (!libro) {
        const error = new Error(`No existe un libro con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }
    const { titulo, autor, anio } = req.body;
    if (!titulo || !autor) {
        const error = new Error('Faltan datos obligatorios: titulo y autor son requeridos');
        error.status = 400;
        return next(error);
    }
    libro.titulo = titulo;
    libro.autor = autor;
    libro.anio = anio ?? null;
    res.json(libro);
};

export const eliminarLibro = (req, res, next) => {
    const indice = libros.findIndex(l => l.id === req.idValidado);
    if (indice === -1) {
        const error = new Error(`No existe un libro con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }
    libros.splice(indice, 1);
    res.status(204).send();
};