const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = ( req = request, res = response ) => {

    const { q, name = 'No name', apikey } = req.query;

    res.json({
        msg : 'Get api endpoint - controler',
        q,
        name,
        apikey
    })
}

const usuariosPost = async ( req, res = response ) => {

    const { nombe, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombe, correo, password, rol } );

    // Verificar si el correo existe 


    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt )

    // Guardar en BDD

    await usuario.save();

    res.json({
        usuario
    })
}

const usuariosPut = ( req, res = response ) => {

    const { id } = req.params;

    res.json({
        msg : 'Put api endpoint - controler',
        id
    })
}

const usuariosPatch = ( req, res = response ) => {

    res.json({
        msg : 'Patch api endpoint - controler'
    })
}

const usuariosDelete = ( req, res = response ) => {

    res.json({
        msg : 'Delete api endpoint - controler'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}