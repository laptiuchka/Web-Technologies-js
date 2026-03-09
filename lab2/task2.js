function isValueInRange(value, min, max) {
    return value >= min && value <= max;
}

let isSystemActive = true;
console.log("\n Task 2 Results ");
console.log("Initial system state:", isSystemActive);

isSystemActive = !isSystemActive; 
console.log("State after NOT toggle:", isSystemActive);
console.log("Is 75 in range [50, 100]?", isValueInRange(75, 50, 100));