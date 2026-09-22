import { autores } from '../data/autores.js';

export const obtenerAutores = (req, res) => {
    res.json(autores);
};

export const obtenerAutorPorId = (req, res, next) => {
    const autor = autores.find(a => a.id === req.idValidado);
    if (!autor) {
        const error = new Error(`No existe un autor con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }
    res.json(autor);
};

export const crearAutor = (req, res, next) => {
    const { nombre, nacionalidad } = req.body;
    if (!nombre) {
        const error = new Error('El campo nombre es obligatorio');
        error.status = 400;
        return next(error);
    }
    let mayorId = 0;

    autores.forEach(autor => {
        if (autor.id > mayorId) {
            mayorId = autor.id;
        }
    });

    const nuevoId = mayorId + 1;
    const nuevoAutor = { id: nuevoId, nombre, nacionalidad: nacionalidad || 'Desconocida' };
    autores.push(nuevoAutor);
    res.status(201).json(nuevoAutor);
};

export const actualizarAutor = (req, res, next) => {
    const autor = autores.find(a => a.id === req.idValidado);
    if (!autor) {
        const error = new Error(`No existe un autor con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }

    const { nombre, nacionalidad } = req.body;
    if (!nombre) {
        const error = new Error('El campo nombre es obligatorio');
        error.status = 400;
        return next(error);
    }

    autor.nombre = nombre;
    autor.nacionalidad = nacionalidad || autor.nacionalidad;
    res.json(autor);
};

export const eliminarAutor = (req, res, next) => {
    const indice = autores.findIndex(a => a.id === req.idValidado);
    if (indice === -1) {
        const error = new Error(`No existe un autor con id ${req.idValidado}`);
        error.status = 404;
        return next(error);
    }
    autores.splice(indice, 1);
    res.status(204).send();
};