// Get all the car elements
const cars = document.querySelectorAll(".car");

// Get all the filter options
const carMake = document.querySelector("#cars");
const carYear = document.querySelector("#year");
const carTransmission = document.querySelector("#transmission");
const carBodyType = document.querySelector("#body-type");

// Add event listeners to the filter options
carMake.addEventListener("change", filterCars);
carYear.addEventListener("change", filterCars);
carTransmission.addEventListener("change", filterCars);
carBodyType.addEventListener("change", filterCars);

// Function to filter the cars
function filterCars() {
  // Get the selected filter options
  const make = carMake.value;
  const year = carYear.value;
  const transmission = carTransmission.value;
  const bodyType = carBodyType.value;

  // Loop through all the cars and hide/show them based on the selected filter options
  cars.forEach((car) => {
    const carMake = car.querySelector(".car-make").textContent.toLowerCase();
    const carYear = car.querySelector(".car-year").textContent;
    const carTransmission = car.querySelector(".car-transmission").textContent.toLowerCase();
    const carBodyType = car.querySelector(".car-body-type").textContent.toLowerCase();

    if (
      (make === "All" || carMake === make.toLowerCase()) &&
      (year === "" || carYear === year) &&
      (transmission === "All" || carTransmission === transmission.toLowerCase()) &&
      (bodyType === "" || carBodyType === bodyType.toLowerCase())
    ) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }
  });
}

<input type="text" id="searchBox" placeholder="Search for a product..."><br><br>
<button onclick="search()">Search</button><br><br>
<p id="result"></p>
<script>
var inventory = ["chevalier", "Toyota", "Honda", "Ford", "Audi"]; 

function search() {
var searchValue = document.getElementById("searchBox").value.toLowerCase();
var index = inventory.indexOf(searchValue);
if (index >= 0) {
document.getElementById("result").innerHTML = searchValue + " is available in our inventory.";
} else {
document.getElementById("result").innerHTML = searchValue + " is not available in our inventory.";
}
}