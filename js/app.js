// instantiate a new XHR object for person4Name
let newReq = new XMLHttpRequest();
newReq.addEventListener("load", person4Name); // load event listener
newReq.open("GET", "https://swapi.co/api/people/4/"); // open the request
newReq.send(); // send the request


// function person4Name() {
//   document.getElementById("person4Name").innerText = obj.name;
// }

// declare function for event listener
function person4Name () {
  console.log(this); // log XMLHttpRequest object
  console.log(this.response); // log response

  let person4NameResponse = JSON.parse(this.response);
  document.getElementById("person4Name").innerText = person4NameResponse.name;

  // instantiate a new XHR object for person4HomeWorld
  let reqPerson4Homeworld = new XMLHttpRequest();
  reqPerson4Homeworld.addEventListener("load", person4Homeworld);
  reqPerson4Homeworld.open("GET", person4NameResponse.homeworld); // open the request
  reqPerson4Homeworld.send(); // send
}

function person4Homeworld() {
  console.log(this.response); // log response
  let person4WorldResponse = JSON.parse(this.response); // parse new response
  document.getElementById("person4HomeWorld").innerText = person4WorldResponse.name;
}


