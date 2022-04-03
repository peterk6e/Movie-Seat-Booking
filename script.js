const availableSeatHtml =
  "<button class='material-icons seat'>chair</button>";
const reservedSeatHtml = "xx<button class='material-icons'>chair</button>";
const space = "&nbsp;&nbsp;";
const searContainer = document.getElementById("seat-container");

let seatRowArray = new Array(10);
let seatsArray = [
  seatRowArray,
  seatRowArray,
  seatRowArray,
  seatRowArray,
  seatRowArray,
];

class Seat {
  constructor(row, col, htmlCode = availableSeatHtml, reserved = false) {
    this.row = row;
    this.col = col;
    this.htmlCode = htmlCode;
    this.reserved;
  }

  toggleSeat() {
    console.log("ok");
    if (!this.reserved) {
      this.reserved = true;
      this.htmlCode = reservedSeatHtml;
    } else {
      this.reserved = false;
      this.htmlCode = availableSeatHtml;
    }
  }
}

// first prototype for theater
for (let i = 0; i < seatsArray.length; i++) {
  for (let j = 0; j < seatRowArray.length; j++) {
    seatsArray[i][j] = new Seat(i, j, availableSeatHtml, false);
    if (j == 2 || j == 7) {
      seatsArray[i][j].htmlCode = space;
    }
    searContainer.innerHTML += seatsArray[i][j].htmlCode;
  }
  searContainer.innerHTML += "</br>";
}
