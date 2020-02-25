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
/*const axios = require('axios');
const moduloArduino = {
  movimiento: function () {
    var motion = new sails.config.johnny.five.Motion({
      pin: 7
    });

    motion.on("calibrated", function() {
      //console.log("calibrated");
    });

    /!*motion.on("motionstart", function() {
      console.log("motionstart");
    });*!/
    return motion.detectedMotion
  }
};*/
/*var five = require('johnny-five');
var board = new  five.Board({
  port: 'COM5'
});*/
/*board.on("ready", function () {
  var proximity =  five.Proximity({controller: 'HCSR04', pin: 7});

  proximity.on("change", () => {
    const {centimeters, inches} = proximity;
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------");
  });
});*/
//var sk = sails.config.johnny.five.Proximity({controller: 'HCSR04', pin: 7});
/*const move = {
  movidito: function () {
    var proximity = five.Proximity({controller: 'HCSR04', pin: 7});
    return proximity.centimeters;
  }
};*/
const axios = require('axios');
module.exports.bootstrap =  function(done) {

  sails.config.johnny.board.on("ready", function () {

    var proximity = new sails.config.johnny.five.Proximity({controller: 'HCSR04', pin: 7});
    setInterval(
      () => {

      }
    )
    proximity.on("change", async () => {
      var sleep = require('sleep');
      const {centimeters, inches} = proximity;
      console.log("Proximity: ");
      console.log("  cm  : ", centimeters);
      console.log("  in  : ", inches);
      console.log("-----------------");
      const respuestaServidor = await axios
        .post('http://localhost:1337/MonitoreoMovimiento',
          {
            valor: centimeters
          }
        )
      console.log('Respuesta del servidor', respuestaServidor)
          sleep.msleep(100);
    });
    done();
  });
};
