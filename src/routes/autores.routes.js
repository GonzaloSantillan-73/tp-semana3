import { Router } from 'express';
import {
    obtenerAutores,
    obtenerAutorPorId,
    crearAutor,
    actualizarAutor,
    eliminarAutor
} from '../controllers/autores.controller.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.get('/', obtenerAutores);
router.post('/', crearAutor);
router.get('/:id', validarId, obtenerAutorPorId);
router.put('/:id', validarId, actualizarAutor);
router.delete('/:id', validarId, eliminarAutor);

export default router;