/**
 * Piso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numero: {
      type: 'number'
    },
    numeroDepartamentos: {
      type: 'number'
    },
    estado: {
      type: 'boolean'
    },

    idEdificio: {
      model: 'edificio',
      required: true
    },

    areasDelPiso:{
      collection:'area', //nombre del modelo hijo
      via: 'idPiso'  //nombre del campo foreing key en la tabla hijo
    }


  }

};

