// Given Parameters
const velocity = 10000; // km/h
const acceleration = 3; // m/s^2
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistance = 0; //km
const initialFuel = 5000; // kg
const fuelBurnRate = 0.5; //kg/s

// Function to check for unit consistency and value validity
function validateParameters(velocity, acceleration, time, fuel, fbr) {
  if (velocity < 0 || acceleration < 0 || time < 0 || fuel < 0 || fbr < 0) {
    // Check for non-negative and numeric values
    throw new Error("All parameters should not be negative values.");
  }

  // Check if all parameters are of type 'number'
  if (
    typeof velocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number" ||
    typeof fuel !== "number" ||
    typeof fbr !== "number"
  ) {
    throw new Error("All parameters must be numbers.");
  }
}

// Function to calculate the new velocity (robust to handle invalid inputs)
function calcNewVel(acc, vel, time) {
  validateParameters(vel, acc, time, initialFuel, fuelBurnRate); // Validate before calculation

  const velInMeters = vel + acc * time; // Calculate velocity in m/s
  return (velInMeters * 3600) / 1000; // Convert to km/h
}
try {
  // Validate all parameters
  validateParameters(
    velocity,
    acceleration,
    timeInSeconds,
    initialFuel,
    fuelBurnRate
  );

  // Convert km/h to m/s
  const velocityInMeters = (velocity * 1000) / 3600;

  // Calculate new distance (ensure correct unit handling)
  const newDistance = initialDistance + velocity * (timeInSeconds / 3600);

  // Calculate remaining fuel (ensure fuel burn is correctly calculated)
  const remainingFuel = initialFuel - fuelBurnRate * timeInSeconds;
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
