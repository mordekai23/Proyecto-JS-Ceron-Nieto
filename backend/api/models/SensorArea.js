/**
 * SensorArea.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idSensor: {
      model: 'sensor',
      required:true
    },
    idArea: {
      model: 'area',
      required:true
    },


    movimientoDelSensorArea:{
      collection:'movimiento', //nombre del modelo hijo
      via: 'idSensorArea'  //nombre del campo foreing key en la tabala hijo
    },

    sensorAreaUsuarioDelSensorArea:{
      collection:'sensorAreaUsuario', //nombre del modelo hijo
      via: 'idSensorArea'  //nombre del campo foreing key en la tabla hijo
    }



  },

};

