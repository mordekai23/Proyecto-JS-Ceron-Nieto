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
const arduino = require('arduino-node');
const arduLatest = arduino({path: 'bin'});
arduLatest.run(['--verify', './arduino/sketch_feb17a.ino'], (err, out) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(out.stdout);
});

const ardu180 = arduino({path: 'bin', version: '1.8.0'});

ardu180.run(['--verify', './arduino/sketch_feb17a.ino'], (err, out) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(out.stdout);
});


module.exports.bootstrap = async function() {


  setInterval(
    ()=>{
      const valor = ardu180;
      console.log('asd11111')
    },
    timeout: 2000
  )
  console.log('asdas')

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

};
