/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const axios = require('axios');
const moduloArduino = {
  movimiento: function () {
    var motion = new sails.config.johnny.five.Motion({
      pin: 7
    });

    motion.on("calibrated", function() {
      //console.log("calibrated");
    });

    /*motion.on("motionstart", function() {
      console.log("motionstart");
    });*/
    return motion.detectedMotion
  }
};

module.exports.bootstrap = async function(done) {
  //var express = require()

  setInterval(
    async ()=>{
      //console.log('Enviar datos');
      var asd = moduloArduino.movimiento();
      //const qwe = asd.data;
      console.log('asd ', asd);
      const respuestaServidor = await  axios
        .post('http://localhost:1337/MonitoreoMovimiento', {
        valor: valor
      });

    },
    2000
  );
  return done();
};
