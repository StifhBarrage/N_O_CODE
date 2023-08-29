const today = new Date();

let value;

value = today;

value = today.getFullYear();
console.log(value);
value = today.getMonth();
console.log(value);
value = today.getDay();
console.log(value);
value = today.getHours();
console.log(value);
value = today.getMinutes();
console.log(value);
value = today.getTime();
console.log(value);
value = today.getSeconds();

while (today.getMinutes < 10) {
    console.log(value);
}

// Create a new Date object
const currentDate = new Date();


// Array of day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day of the week (0 = Sunday, 1 = Monday, etc.)
const dayOfWeek = currentDate.getDay();

// Get the day name using the dayOfWeek index
const dayName = dayNames[dayOfWeek];

console.log("Day:", dayName);