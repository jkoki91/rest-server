const { Router } = require('express');
const { check } = require('express-validator');

const { esRoleValido, emailExiste, existeUsuarioPorID } = require('../helpers/db-validators');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorID ),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPut );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 caracteres').isLength({ min:6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo', 'El correo ya exsiste').custom( (correo) => emailExiste(correo) ),
    // check('rol', 'El rol no es válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( ( rol ) => esRoleValido(rol) ),
    // check('rol').custom( esRoleValido ), // esta línea representa lo mismo que la anterior
    validarCampos
    ],usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );


module.exports = router;
