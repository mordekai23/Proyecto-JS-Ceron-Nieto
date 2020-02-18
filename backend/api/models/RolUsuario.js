/**
 * RolUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ver:{
      type:'string'
    },
    crear:{
      type:'boolean'
    },
    editar:{
      type:'boolean'
    },

    eliminar:{
      type:'boolean'
    },

    idRol:{
      model:'rol',
      required :true
    },

    idUsuario:{
      model:'usuario',
      required: true
    },

  },

};

