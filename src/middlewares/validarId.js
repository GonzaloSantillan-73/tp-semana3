export const validarId = (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        const error = new Error('El ID debe ser un número entero positivo');
        error.status = 400;
        return next(error);
    }
    req.idValidado = id;
    next();
};