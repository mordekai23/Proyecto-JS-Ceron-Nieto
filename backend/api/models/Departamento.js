/**
 * Departamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numeroDeDepartamento: {
      type: 'number'
    },
    descripcion: {
      type: 'string'
    },
    estado: {
      type: 'boolean'
    },

    idEdificio: {
      model: 'edificio',
      required: true
    },

    areasDelDepartamento:{
      collection:'area', //nombre del modelo hijo
      via: 'idDepartamento'  //nombre del campo foreing key en la tabla hijo
    }


  }

};

