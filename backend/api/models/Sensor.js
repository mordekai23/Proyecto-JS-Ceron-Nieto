/**
 * Sensor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    codigoInterno: {
      type: 'string'
    },

    nombre: {
      type: 'string'
    },

    movimientosDelSensor:{
      collection:'movimiento', //nombre del modelo hijo
      via: 'idSensor'  //nombre del campo foreing key en la tabala hijo
    },

    idArea: {
      model: 'area',
      required:true
    },


  },
};

