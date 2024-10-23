// Given Parameters
const velocity = 10000; // velocity in km/h
const acceleration = 3; // acceleration in m/s^2
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistance = 0; // initial distance in km
const initialFuel = 5000; // initial fuel in kg
const fuelBurnRate = 0.5; // fuel burn rate in kg/s

// Function to check for unit consistency and value validity
function validateParameters(velocity, acceleration, time, fuel, fbr) {
  // Check for non-negative and numeric values
  if (velocity < 0 || acceleration < 0 || time < 0 || fuel < 0 || fbr < 0) {
    throw new Error("All parameters must be non-negative values.");
  }

  // Check if all parameters are of type 'number'
  if (
    typeof velocity !== 'number' ||
    typeof acceleration !== 'number' ||
    typeof time !== 'number' ||
    typeof fuel !== 'number' ||
    typeof fbr !== 'number'
  ) {
    throw new Error("All parameters must be numbers.");
  }

  // Unit validation
  if (velocity > 300000) { // Assumes no realistic velocity can exceed 300,000 km/h (hypothetical limit)
    throw new Error("Velocity seems to be in the wrong unit (expected km/h).");
  }

  if (time > 86400) { // Checks if time exceeds 24 hours (seconds in a day)
    throw new Error("Time seems too large (expected seconds). Ensure time is in seconds.");
  }

  if (acceleration > 100) { // Arbitrary limit for realistic acceleration in m/s^2
    throw new Error("Acceleration seems unusually large (expected m/s^2).");
  }
}

// Function to calculate the new velocity (robust to handle invalid inputs)
function calcNewVel(acc, vel, time) {
  validateParameters(vel, acc, time, initialFuel, fuelBurnRate); // Validate before calculation

  const velInMeters = vel + (acc * time); // Calculate velocity in m/s
  return (velInMeters * 3600) / 1000; // Convert to km/h
}

// Ensure valid inputs and catch any errors
try {
  // Validate all parameters
  validateParameters(velocity, acceleration, timeInSeconds, initialFuel, fuelBurnRate);

  // Convert velocity from km/h to m/s
  const velocityInMeters = (velocity * 1000) / 3600;

  // Calculate new distance (ensure correct unit handling)
  const newDistance = initialDistance + (velocity * (timeInSeconds / 3600));

  // Calculate remaining fuel (ensure fuel burn is correctly calculated)
  const remainingFuel = initialFuel - (fuelBurnRate * timeInSeconds);
  if (remainingFuel < 0) {
    throw new Error("Fuel has run out. Remaining fuel cannot be negative.");
  }

  // Calculate new velocity based on acceleration
  const newVelocity = calcNewVel(acceleration, velocityInMeters, timeInSeconds);

  // Output results
  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);

} catch (error) {
  console.error(`Error: ${error.message}`);
}







