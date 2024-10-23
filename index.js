/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

/*Regarding new velocity:
  The original conversions are not in the required units (being m).

  New Distance:
  Since vel is per hour and time is in seconds I converted time to hour

  Ramining Fuel:
  remaining Fuel = intila Fuel - (FBR*time)
*/

// Given Parameters
const vel = 10000; // velocity (km/h)
const velM = (vel*1000)/3600; // velocity  in meters

const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*(time/3600)); //calcultes new distance
const rf = fuel - (fbr*time); //calculates remaining fuel
const vel2 = calcNewVel(acc, velM, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(acc,vel,time){
  let result = vel+(acc*time);
  return (result*3600)/1000;
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






