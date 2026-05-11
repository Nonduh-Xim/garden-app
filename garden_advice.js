// Function to display watering advice
function waterPlants(month) {

  // Winter season advice
  if (month === "June") {
    console.log("Water plants less frequently.");
  }

  // Summer season advice
  else if (month === "December") {
    console.log("Water plants more often.");
  }

}

// Call the function with June
waterPlants("June");