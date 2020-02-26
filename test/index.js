/*const { Board, Proximity } = require("johnny-five");
const board = new Board({
    port: 'COM5'
});

board.on("ready", () => {
    const proximity = new Proximity({
        controller: "HCSR04",
        pin: 7
    });

    proximity.on("change", () => {
        const {centimeters, inches} = proximity;
        console.log("Proximity: ");
        console.log("  cm  : ", centimeters);
        console.log("  in  : ", inches);
        console.log("-----------------");
    });
});

board.on('error', function (err) {
    console.log(err);
});
 */

var five = require('johnny-five');
var board = new  five.Board({
    port: 'COM5'
});

board.on("ready", function () {
    var proximity =  five.Proximity({controller: 'HCSR04', pin: 7});

    proximity.on("change", () => {
        const {centimeters, inches} = proximity;
        console.log("Proximity: ");
        console.log("  cm  : ", centimeters);
        console.log("  in  : ", inches);
        console.log("-----------------");
    });
});