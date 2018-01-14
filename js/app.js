// instatiate a new XHR object
let newReq = new XMLHttpRequest();

// declare function for event listener
function reqListener () {
  console.log(this);
  console.log(this.response); // log response
  let person4Response = JSON.parse(this.response);
  document.getElementById("person4Name").innerText = person4Response.name;
}

// attach event listener to events
newReq.addEventListener("load", reqListener); // when the request is loaded do reqListener

// open the request
newReq.open("GET", "https://swapi.co/api/people/4/");

// send the request
newReq.send();