var five = require('johnny-five');
var board = new five.Board({
  port: "COM5"
});

module.exports.johnny = {
  board:board,
  five:five,
  proximity:null
};




/*board.on("ready", function () {
  var motion = new sails.config.johnny.five.Motion({
    pin: 7
  });

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function() {
    //console.log("motionstart");
  });
  return motion.detectedMotion
});*/

module.exports.johnny = {
  board:board,
  five:five,
};
