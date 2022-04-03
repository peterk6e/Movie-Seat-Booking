const space = "&nbsp;&nbsp;";
const seatContainer = document.getElementById("seat-container");

let seatRowArray = new Array(10);
let seatsArray = [
  seatRowArray,
  seatRowArray,
  seatRowArray,
  seatRowArray,
  seatRowArray,
];

// second prototype
for (let i = 0; i < seatsArray.length; i++) {
  for (let j = 0; j < seatRowArray.length; j++) {
    if (j == 2 || j == 7) {
      seatContainer.innerHTML += space;
    } else {
      let seat = document.createElement("button");
      seat.setAttribute("id", i + "-" + j);
      seat.classList.add("material-icons");
      seat.classList.add("seat");
      seat.innerHTML = "chair";
      seatContainer.appendChild(seat);
    }
  }
  seatContainer.innerHTML += "</br>";
}

//eventListener not added if done in above loop. DOM might not be ready;
for (let i = 0; i < seatsArray.length; i++) {
  for (let j = 0; j < seatRowArray.length; j++) {
    if (j != 2 && j != 7) {
      let seat = document.getElementById(i + "-" + j);
      seat.addEventListener("click", toggleSeat);
    }
  }
}

function toggleSeat() {
  this.classList.toggle("seat-booked");
}
