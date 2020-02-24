/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    apellido:{
      type:'string'
    },
    password: {
      type: 'string'
    },
    correoElectronico: {
      type: 'string'
    },
    rol: {
      type: 'string'
    },

    rolesUsuarioDelUsuario:{
      collection:'rolUsuario', //nombre del modelo hijo
      via: 'idUsuario'  //nombre del campo foreing key en la tabla hijo
    },

    areausuarioDelUsuario:{
      collection:'areaUsuario', //nombre del modelo hijo
      via: 'idUsuario'  //nombre del campo foreing key en la tabla hijo
    }

  }
  };

