/**
 * SensorAreaUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    enviarNotificacion: {
      type: 'string'
    },

    idSensorArea: {
      model: 'sensorArea',
      required: true
    },

    idUsuario: {
      model: 'usuario',
      required:true
    },

  },

};

