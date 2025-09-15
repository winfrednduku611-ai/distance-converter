// prompt the user to enter a distance in miles
let milesInput = prompt("Enter distance in miles:");

// convert the input to a number
let miles = parseFloat(milesInput);

//check if the input is a valid number
if (isNaN(miles)) {
    aler("invalid inmput. Please enter a numeric value.");
} else {
    //use a constant for the conversion factor 
    const conversionFactor = 1.60934;

    // convert miles to kilometers
    let kilometers = miles * conversionFactor;

    // display the result
    alert(`${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`);
}