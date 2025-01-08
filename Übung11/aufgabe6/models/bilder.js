const bilder = [
  {
    dateiname: "robot.png",
    beschreibung: "Frida Kahlo painting of a robot waving goodbye",
  },
  {
    dateiname: "meadow.png",
    beschreibung: "A photo of a wide green meadow and a clear blue sky",
  },
  {
    dateiname: "elephant.png",
    beschreibung: "A pink elephant in a small room",
  },
  {
    dateiname: "fhdortmund.png",
    beschreibung: "An expressive oil painting of FH Dortmund in summer",
  },
];

function holeStartBild() {
  return bilder[0]; // Return the first image
}

function vor(count) {
  if (count === bilder.length - 1) {
    count = 0; // Loop to the first image if at the end
  } else {
    count++; // Go to the next image
  }
  return { bild: bilder[count], count: count }; // Return the image and the updated count
}

function zurueck(count) {
  if (count === 0) {
    count = bilder.length - 1; // Loop to the last image if at the start
  } else {
    count--; // Go to the previous image
  }
  return { bild: bilder[count], count: count }; // Return the image and the updated count
}

module.exports = { holeStartBild, vor, zurueck };

