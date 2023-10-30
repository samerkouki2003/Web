var reservedSeats = {
  record1: {
    seat: "b19",
    owner: {
      fname: "Joe",
      lname: "Smith"
    }
  },
  record2: {
    seat: "b20",
    owner: {
      fname: "Joe",
      lname: "Smith"
    }
  },
  record3: {
    seat: "b21",
    owner: {
      fname: "Joe",
      lname: "Smith"
    }
  },
  record4: {
    seat: "b22",
    owner: {
      fname: "Joe",
      lname: "Smith"
    }
  }
};


function makeRows(sectionLength, rowLength, placement) {
  const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];
  let html = "";
  let counter = 1;

  rows.forEach (row=> {
    switch(placement) {
      case "left":
        html += `<div class="label">${row}</div>`;
        break;
      case "right":
        counter += rowLength - sectionLength;  // Hier nur die verbleibende Länge
        break;
      default:  // "middle"
        counter += (rowLength - sectionLength) / 2;  // Springe zur Mitte
        break;
    }

    for (let i = 0; i < sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`;
      counter++;
    }

    switch(placement) {
      case "left":
        counter += rowLength - sectionLength;  // Springe zur nächsten Zeile für die nächste Iteration
        break;
      case "right":
        html += `<div class="label">${row}</div>`;
        counter = counter + sectionLength;  // Springe zur nächsten Zeile für die nächste Iteration
        break;
      default:  // "middle"
        counter += (rowLength - sectionLength) / 2;  // Springe zum Ende der Zeile für die nächste Iteration
        break;
    }
  });

  document.getElementById(placement).innerHTML = html;
}

makeRows(3, 15, "left");
makeRows(3, 15, "right");
makeRows(9, 15, "middle");