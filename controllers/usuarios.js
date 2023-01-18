const { request, response } = require('express')


const usuariosGet = ( req = request, res = response ) => {

    const { q, name = 'No name', apikey } = req.query;

    res.json({
        msg : 'Get api endpoint - controler',
        q,
        name,
        apikey
    })
}

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
        msg : 'Post api endpoint - controler',
        nombre,
        edad
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