
import { Router } from 'express';

import { publicacionesController } from './publicaciones-controller.mjs';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campos.mjs';


const publicacionesRouter = Router();

publicacionesRouter.post('/', [
    check('Titulo', 'El campo es obligatorio').not().isEmpty(),
    check('Autor', 'El campo es obligatorio').not().isEmpty(),
    //check('FechaPublicacion', 'El campo es obligatorio').not().isEmpty(),
    check('Contenido', 'El campo es obligatorio').not().isEmpty(),
    validarCampos
], publicacionesController.post);

publicacionesRouter.get('/search', [
    check('campo', 'El campo es obligatorio').not().isEmpty(),
    check('valor', 'El campo es obligatorio').not().isEmpty(),
    validarCampos
], publicacionesController.search)

publicacionesRouter.get('/:id', [
    //check('id').custom(existeRegistroPorId),
    validarCampos
], publicacionesController.get)

publicacionesRouter.get('/', [
], publicacionesController.gets)

publicacionesRouter.put('/:id', [
    //check('id').custom(existeRegistroPorId),
    validarCampos
], publicacionesController.update)

publicacionesRouter.delete('/:id', [
    //check('id').custom(existeRegistroPorId),
    validarCampos
], publicacionesController.delete)



export { publicacionesRouter }
    