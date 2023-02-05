const Role = require('../models/role');
const {Usuario, Categoria, Producto} = require('../models');



const esRoleValido = async (rol = '') => {
    const existeRole = await Role.findOne({rol});
    if( !existeRole ) {
        throw new Error(`Es rol ${rol} no está registrado en la base de datos`)
    }
};

const emailExiste = async ( correo = '' ) => {
    const existeEmail = await Usuario.findOne( {correo: correo} )
    if( existeEmail ){
        throw new Error(`Es correo ${correo} ya está registrado en la base de datos`)
    }
};

const existeUsuarioPorID = async ( id ) => {
    const existeUsuario = await Usuario.findById( id )
    if( !existeUsuario ){
        throw new Error(`Es id: ${id} no existe en la base de datos`)
    }
}

const existeCategoriaPorID = async ( id ) => {
    const existeCategoria = await Categoria.findById( id )
    if( !existeCategoria ){
        throw new Error(`Es id: ${id} no existe en la base de datos`)
    }
}

const existeProductoPorID = async ( id ) => {
    const existeProducto = await Producto.findById( id )
    if( !existeProducto ){
        throw new Error(`Es id: ${id} no existe en la base de datos`)
    }
}

module.exports = { 
    esRoleValido,
    emailExiste,
    existeUsuarioPorID,
    existeCategoriaPorID,
    existeProductoPorID
};