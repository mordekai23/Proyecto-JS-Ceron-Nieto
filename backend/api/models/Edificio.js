/**
 * Edificio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    ubicacion: {
      type: 'string'
    },
    estado: {
      type: 'string'
    },

    pisosDelEdificio:{
      collection:'piso', //nombre del modelo hijo
      via: 'idEdificio'  //nombre del campo foreing key en la tabla hijo
    }

  }

};

