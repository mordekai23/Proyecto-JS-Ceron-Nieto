/**
 * Area.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

    nombre: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    estado: {
      type: 'string'
    },

    idDepartamento: {
      model: 'departamento',
      required:true
    },

    sensoresDelArea:{
      collection:'sensor', //nombre del modelo hijo
      via: 'idArea'  //nombre del campo foreing key en la tabla hijo
    },

    areaUsuarioDelArea:{
      collection:'areaUsuario', //nombre del modelo hijo
      via: 'idArea'  //nombre del campo foreing key en la tabla hijo
    }


     },

};

