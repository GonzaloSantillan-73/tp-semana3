import { Router } from 'express';
import {
    obtenerLibros,
    obtenerLibroPorId,
    crearLibro,
    actualizarLibro,
    eliminarLibro
} from '../controllers/libros.controller.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.get('/', obtenerLibros);
router.post('/', crearLibro);
router.get('/:id', validarId, obtenerLibroPorId);
router.put('/:id', validarId, actualizarLibro);
router.delete('/:id', validarId, eliminarLibro);

export default router;