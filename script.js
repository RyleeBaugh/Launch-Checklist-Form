// Write your JavaScript code here!
window.addEventListener("load", function(){

   setPlanetaryData();

   let button = document.getElementById("formSubmit");
   
   //Inputs
   let pilotInput = document.getElementById("pilotName");
   let copilotInput = document.getElementById("copilotName");
   let fuelInput = document.getElementById("fuelLevel");
   let cargoInput = document.getElementById("cargoMass");

   //Status
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = "hidden";

   /* Click Event */
   button.addEventListener("click", function(event) {
      event.preventDefault();
      
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert('All fields are required!');
      } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value) || isNaN(fuelInput.value) || isNaN(cargoInput.value)) {
         alert('Make sure to enter valid information for each field!');
      } else {
         event.preventDefault();

         //print statuts
         pilotStatus.textContent = `Pilot ${pilotInput.value} is ready for launch`;
         copilotStatus.textContent = `Co-pilot ${copilotInput.value} is ready for launch`;
         fuelStatus.textContent = 'Fuel level high enough for launch';
         cargoStatus.textContent = 'Cargo mass low enough for launch';
         launchStatus.textContent = 'Shuttle is ready for launch';

         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "green";
      }
   
      // Fuel check
      if(fuelInput.value < 10000){
         fuelStatus.textContent = 'There is not enough fuel for the journey';
         
         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = "red";
      };

      // Cargo check
      if(cargoInput.value > 10000){
         cargoStatus.textContent = 'Cargo mass too high for launch';

         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = "red";
      }
   });

   function setPlanetaryData() {
      let planetName = document.getElementById("planetName");
      let planetDiameter = document.getElementById("planetDiameter");
      let planetStar = document.getElementById("planetStar");
      let planetDistance = document.getElementById("planetDistance");
      let planetImg = document.getElementById("planetImg");
      let planetMoons = document.getElementById("planetMoons");

      const planets = [
         {
            "name": "Tatooine",
            "diameter": "10465 km",
            "star": "Tatoo I & Tatoo II",
            "distance": "43000 light years from galactic core",
            "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
            "moons": 3
         },
         {
             "name": "Pern",
             "diameter": "measurement is under dispute",
             "star": "Alpha Sagittarius (a.k.a. Rukbat)",
             "distance": "Varies - find a library",
             "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
             "moons": 2
         },
         {
             "name": "Saturn/Titan",
             "diameter": "5149.5 km",
             "star": "Sol",
             "distance": "1.4 billion km from Earth",
             "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
             "moons": 0
         },
         {
             "name": "Mars",
             "diameter": "6779 km",
             "star": "Sol",
             "distance": "225 million km from Earth",
             "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
             "moons": 2
         },
         {
             "name": "K2-18b",
             "diameter": "34500 km",
             "star": "K2-18",
             "distance": "110 light years from Earth",
             "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
             "moons": "unknown"
         },
         {
             "name": "Jupiter/Europa",
             "diameter": "3,121.6 km",
             "star": "Sol",
             "distance": "628.3 million km from Earth",
             "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
             "moons": 0
         }
     ]

     //random # between 0-5
     let rand = (Math.floor(Math.random() * 6) + 1) - 1;

     //set Planetary Data
     planetName.textContent = "Name: " + planets[rand].name;
     planetDiameter.textContent = "Diameter: " + planets[rand].diameter;
     planetStar.textContent = "Star: " + planets[rand].star;
     planetDistance.textContent = "Distance from Earth: " +planets[rand].distance;
     planetImg.src = planets[rand].image;
     planetMoons.textContent = "Number of Moons: " + planets[rand].moons;
   }


})

