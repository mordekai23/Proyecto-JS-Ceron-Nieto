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
    description: {
      type: 'string'
    },
    estado: {
      type: 'string'
    },

    idPiso: {
      model: 'piso',
      required:true
    },

    sensorAreaDelArea:{
      collection:'sensorArea', //nombre del modelo hijo
      via: 'idArea'  //nombre del campo foreing key en la tabla hijo
    }

     },

};

