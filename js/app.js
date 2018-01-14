// instantiate a new XHR object for person4
let newReq = new XMLHttpRequest();
newReq.addEventListener("load", person4Name); // load event listener
newReq.open("GET", "https://swapi.co/api/people/4/"); // open the request
newReq.send(); // send the request

// declare function for event listener
function person4Name () {
  // console.log(this); // log XMLHttpRequest object
  // console.log(this.response); // log response

  let person4NameResponse = JSON.parse(this.response);
  document.getElementById("person4Name").innerText = person4NameResponse.name;

  // instantiate a new XHR object for person4HomeWorld
  let reqPerson4Homeworld = new XMLHttpRequest();
  reqPerson4Homeworld.addEventListener("load", person4Homeworld);
  reqPerson4Homeworld.open("GET", person4NameResponse.homeworld); // open the request
  reqPerson4Homeworld.send(); // send
}

function person4Homeworld() {
  // console.log(this.response); // log response
  let person4WorldResponse = JSON.parse(this.response); // parse new response
  document.getElementById("person4HomeWorld").innerText = person4WorldResponse.name;
}

// instantiate new XHR object for person14
let person14Req = new XMLHttpRequest();
person14Req.addEventListener("load", person14Name);
person14Req.open("GET", "https://swapi.co/api/people/14/");
person14Req.send();

function person14Name() {
  // console.log(this.response);
  let person14NameResponse = JSON.parse(this.response);
  document.getElementById("person14Name").innerText = person14NameResponse.name;

  let reqPerson14Species = new XMLHttpRequest();
  reqPerson14Species.addEventListener("load", person14Species);
  reqPerson14Species.open("GET", person14NameResponse.species);
  reqPerson14Species.send();
}

function person14Species() {
  // console.log(this.response);
  let person14SpeciesResponse = JSON.parse(this.response);
  document.getElementById("person14Species").innerText = person14SpeciesResponse.name;
}

// list of all films
let reqFilms = new XMLHttpRequest();
reqFilms.addEventListener("load", films);
reqFilms.open("GET", "https://swapi.co/api/films/");
reqFilms.send();

function films() {
  // console.log(this.response);
  let formatFilms = JSON.parse(this.response);
  let films = formatFilms.results;

  // console.log(formatFilms.results);

  // loop through this.response.results to get film titles
  films.forEach(function(element, index, array) {
    let createFilm = document.createElement("li"); // create li
    createFilm.className = "film";
    document.getElementById("filmList").appendChild(createFilm);
    let filmTitle = document.createElement("h2"); // create h2
    filmTitle.className = "filmTitle";
    createFilm.appendChild(filmTitle);
    filmTitle.innerText = element.title;
    let planetsTitle = document.createElement("h3");
    planetsTitle.innerText = "Planets";
    createFilm.appendChild(planetsTitle);

    let createFilmPlanets = document.createElement("ul");
    createFilmPlanets.className = "filmPlanets";
    createFilm.appendChild(createFilmPlanets);

    // instantiate new XHR object for film planets
    let filmPlanets = element.planets;
    // console.log(filmPlanets);

    filmPlanets.forEach(function(element, index, array) {
      let reqPlanets = new XMLHttpRequest();
      reqPlanets.addEventListener("load", planets);
      reqPlanets.open("GET", element);
      reqPlanets.send();

      function planets() {
        // console.log(this.response);
        let formatPlanets = JSON.parse(this.response);
        let planetName = formatPlanets.name;

        let createPlanets = document.createElement("li");
        createPlanets.className = "planet";
        createFilmPlanets.appendChild(createPlanets);
        let createPlanetName = document.createElement("h4");
        createPlanetName.className = "planetName";
        createPlanets.appendChild(createPlanetName);
        createPlanetName.innerText = planetName;
      }
    })
  }) 
}