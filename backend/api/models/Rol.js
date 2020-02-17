/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },

    rolUsuarioDelRol:{
      collection:'rolUsuario', //nombre del modelo hijo
      via: 'idRol'  //nombre del campo foreing key en la tabla hijo
    }


  }

  };

