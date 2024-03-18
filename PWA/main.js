// square dom var -------------------------------------------------------------------------------------------------------
let squareArea = document.querySelector(".squareArea");
let squareCircum = document.querySelector(".squareCircum");
let squareForm = document.querySelector(".square");

// rectangle dom var -------------------------------------------------------------------------------------------------------
let rectArea = document.querySelector(".rectangleArea");
let rectCircum = document.querySelector(".rectangleCircum");
let rectForm = document.querySelector(".rectangle");

// triangle dom var -------------------------------------------------------------------------------------------------------
let triangleArea = document.querySelector(".triagnleArea");
let triangleCircum = document.querySelector(".triagnleCircum");
let triaForm = document.querySelector(".triangle");

// triangle dom var -------------------------------------------------------------------------------------------------------
let circleArea = document.querySelector(".circleArea");
let circleCircum = document.querySelector(".circleCircum");
let circleForm = document.querySelector(".circle");

//cube dom var----------------------------------------------------------------------------------------------------------------
let cubeArea = document.querySelector(".cubeArea");
let cubeVolume = document.querySelector(".cubeVolume");
let cubeForm = document.querySelector(".cube");

//block dom var----------------------------------------------------------------------------------------------------------------
let blockArea = document.querySelector(".blockArea");
let blockVolume = document.querySelector(".blockVolume");
let blockForm = document.querySelector(".block");

//sphere dom var ---------------------------------------------------------------------------------------------------------------
let sphereArea = document.querySelector(".sphereArea");
let sphereVolume = document.querySelector(".sphereVolume");
let sphereForm = document.querySelector(".sphere");

//cone dom var ---------------------------------------------------------------------------------------------------------------
let coneArea = document.querySelector(".coneArea");
let coneVolume = document.querySelector(".coneVolume");
let coneForm = document.querySelector(".cone");

//cylinder dom var ---------------------------------------------------------------------------------------------------------------
let cylinderArea = document.querySelector(".cylinderArea");
let cylinderVolume = document.querySelector(".cylinderVolume");
let cylinderForm = document.querySelector(".cylinder");

// converter dom var ------------------------------------------------------------------------------------------------------
let converter = document.querySelector(".converter");

//converter area dom var ----------------------------------------------------------------------------------------------------
let converterArea = document.querySelector(".converterArea");
let convAreaOut = document.querySelector(".convResultArea");

//Square class-------------------------------------------------------------------------------------------------------
class Square {
  resultArea = 0;
  resultCircum = 0;
  area(a, unit) {
    this.resultArea = a * a;
    squareArea.innerHTML =
      "S = " + a + "&sup2" + " = " + this.resultArea + "" + unit + "&sup2";
  }

  circum(a, unit) {
    this.resultCircum = a * 4;
    squareCircum.innerHTML =
      "o = " + "4*" + a + " = " + this.resultCircum + " " + unit;
  }
}

//Rectangle class -------------------------------------------------------------------------------------------------------
class Rectangle {
  resultArea = 0;
  resultCircum = 0;
  area(a, b, unit) {
    this.resultArea = a * b;
    rectArea.innerHTML =
      "S = " + a + "*" + b + " = " + this.resultArea + "" + unit + "&sup2";
  }

  circum(a, b, unit) {
    this.resultCircum = 2 * a + 2 * b;
    rectCircum.innerHTML =
      "o = " +
      "2*" +
      a +
      " + " +
      "2*" +
      b +
      " = " +
      this.resultCircum +
      " " +
      unit;
  }
}

//Triangle class -------------------------------------------------------------------------------------------------------
class Triangle {
  resultArea = 0;
  resultCircum = 0;
  area(a, Va, unit) {
    this.resultArea = 0.5 * a * Va;
    triangleArea.innerHTML =
      "S = " +
      " &frac12" +
      "*" +
      a +
      "*" +
      Va +
      " = " +
      this.resultArea +
      "" +
      unit +
      "&sup2";
  }

  circum(a, b, c, unit) {
    this.resultCircum = Number(a) + Number(b) + Number(c);
    triangleCircum.innerHTML =
      "o = " + a + "+" + b + "+" + c + " = " + this.resultCircum + " " + unit;
  }
}

//Circle class -----------------------------------------------------------------------------------------------------------
class Circle {
  resultArea = 0;
  resultCircum = 0;
  area(r, unit) {
    this.resultArea = Math.PI * (r * r);
    this.resultArea = Math.round(this.resultArea * 100) / 100;
    circleArea.innerHTML =
      "S = " + "π" + r + "&sup2 = " + this.resultArea + "" + unit + "&sup2";
  }

  circum(r, unit) {
    this.resultCircum = 2 * Math.PI * r;
    this.resultCircum = Math.round(this.resultCircum * 100) / 100;
    circleCircum.innerHTML =
      "o = " + "2π" + r + "=" + this.resultCircum + " " + unit;
  }
}

//Cube class---------------------------------------------------------------------------------------------------------
class Cube {
  resultArea = 0;
  resultVolume = 0;

  area(a, unit) {
    this.resultArea = 6 * a * a;
    cubeArea.innerHTML =
      "S = 6 *" + a + "*" + a + " = " + this.resultArea + "" + unit + "&sup2";
  }

  volume(a, unit) {
    this.resultVolume = a * a * a;
    cubeVolume.innerHTML =
      "S = " +
      a +
      "*" +
      a +
      "*" +
      a +
      " = " +
      this.resultVolume +
      "" +
      unit +
      "&sup3";
  }
}

//Block class --------------------------------------------------------------------------------------------------------
class Block {
  resultArea = 0;
  resultVolume = 0;

  area(a, b, c, unit) {
    this.resultArea = 2 * (a * b + a * c + b * c);
    blockArea.innerHTML =
      "S = 2 *(" +
      a +
      "*" +
      b +
      "+" +
      a +
      "*" +
      c +
      "+" +
      b +
      "*" +
      c +
      ")" +
      " = " +
      this.resultArea +
      "" +
      unit +
      "&sup2";
  }

  volume(a, b, c, unit) {
    this.resultVolume = a * b * c;
    blockVolume.innerHTML =
      "S = " +
      a +
      "*" +
      b +
      "*" +
      c +
      " = " +
      this.resultVolume +
      "" +
      unit +
      "&sup3";
  }
}

//Sphere class -----------------------------------------------------------------------------------------------------------
class Sphere {
  resultArea = 0;
  resultVolume = 0;
  area(r, unit) {
    this.resultArea = 4 * Math.PI * (r * r);
    this.resultArea = Math.round(this.resultArea * 100) / 100;
    sphereArea.innerHTML =
      "S = 4*" + "π" + r + "&sup2 = " + this.resultArea + "" + unit + "&sup2";
  }

  volume(r, unit) {
    this.resultVolume = (4 / 3) * Math.PI * (r * r * r);
    this.resultVolume = Math.round(this.resultVolume * 100) / 100;
    sphereVolume.innerHTML =
      "V= " + "2π" + r + "=" + this.resultVolume + " " + unit;
  }
}

//Cone class---------------------------------------------------------------------------------------------------------
class Cone {
  resultArea = 0;
  resultVolume = 0;

  area(r, s, unit) {
    this.resultArea = Math.PI * r * (r + s);
    this.resultArea = Math.round(this.resultArea * 100) / 100;
    coneArea.innerHTML =
      "S = π" +
      r +
      "(" +
      r +
      "*" +
      s +
      ") = " +
      this.resultArea +
      "" +
      unit +
      "&sup2";
  }

  volume(r, v, unit) {
    this.resultVolume = (1 / 3) * Math.PI * (r * r) * v;
    this.resultVolume = Math.round(this.resultVolume * 100) / 100;
    coneVolume.innerHTML =
      "S = ⅓π" +
      r +
      "&sup2" +
      v +
      " = " +
      this.resultVolume +
      "" +
      unit +
      "&sup3";
  }
}

//Cone class---------------------------------------------------------------------------------------------------------
class Cylinder {
  resultArea = 0;
  resultVolume = 0;

  area(r, v, unit) {
    this.resultArea = 2 * (Math.PI * r) * (Number(r) + Number(v));
    this.resultArea = Math.round(this.resultArea * 100) / 100;
    cylinderArea.innerHTML =
      "S = 2π" +
      r +
      "(" +
      r +
      "*" +
      v +
      ") = " +
      this.resultArea +
      "" +
      unit +
      "&sup2";
  }

  volume(r, v, unit) {
    this.resultVolume = 3.14 * r ** 2 * v;
    this.resultVolume = Math.round(this.resultVolume * 100) / 100;
    cylinderVolume.innerHTML =
      "S = π" +
      r +
      "&sup2" +
      v +
      " = " +
      this.resultVolume +
      "" +
      unit +
      "&sup3";

    console.log(this.resultVolume);
  }
}

// Square listener function with form data -------------------------------------------------------------------------------------------------------
const sqr = new Square();
squareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(squareForm);
  const a = data.get("a");
  const unit = data.get("unitSquare");

  sqr.area(a, unit);
  sqr.circum(a, unit);
  drawSquare(a);
});

// Rectangle listener function with form data -------------------------------------------------------------------------------------------------------
const rect = new Rectangle();
rectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(rectForm);
  const a = data.get("a");
  const b = data.get("b");
  const unit = data.get("unitRectangle");

  rect.area(a, b, unit);
  rect.circum(a, b, unit);
});

// Triangle listener function with form data -------------------------------------------------------------------------------------------------------
const tria = new Triangle();
triaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(triaForm);
  const a = data.get("a");
  const b = data.get("b");
  const c = data.get("c");
  const Va = data.get("Va");
  const unit = data.get("unitTriangle");
  if (a + b > c && a + c > b && b + c > a) {
    tria.area(a, Va, unit);
    tria.circum(a, b, c, unit);
  } else {
    alert("Neplatí trojuhlenikova nerovnost");
  }
});

// Circlel istener function with form data -------------------------------------------------------------------------------------------------------
const circle = new Circle();
circleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(circleForm);
  const r = data.get("r");
  const unit = data.get("unitCircle");

  circle.area(r, unit);
  circle.circum(r, unit);
});

// Cube listener function with form data -------------------------------------------------------------------------------------------------------
const cube = new Cube();
cubeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(cubeForm);
  const a = data.get("a");
  const unit = data.get("unitCube");
  cube.area(a, unit);
  cube.volume(a, unit);
});

// Block listener function with form data -------------------------------------------------------------------------------------------------------
const block = new Block();
blockForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(blockForm);
  const a = data.get("a");
  const b = data.get("b");
  const c = data.get("c");
  const unit = data.get("unitBlock");
  block.area(a, b, c, unit);
  block.volume(a, b, c, unit);
});

// Sphere listener function with form data -------------------------------------------------------------------------------------------------------
const sphere = new Sphere();
sphereForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(sphereForm);
  const r = data.get("r");
  const unit = data.get("unitSphere");
  sphere.area(r, unit);
  sphere.volume(r, unit);
});

// cone listener function with form data -------------------------------------------------------------------------------------------------------
const cone = new Cone();
coneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(coneForm);
  const r = data.get("r");
  const s = data.get("s");
  const v = data.get("v");
  const unit = data.get("unitCone");
  cone.area(r, s, unit);
  cone.volume(r, v, unit);
});

// cylinder listener function with form data -------------------------------------------------------------------------------------------------------
const cylinder = new Cylinder();
cylinderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(cylinderForm);
  const r = data.get("r");
  const v = data.get("v");
  const unit = data.get("unitCylinder");
  cylinder.area(r, v, unit);
  cylinder.volume(r, v, unit);
});

// converter listener function
converter.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(converter);
  const firstInpt = data.get("firstInpt");
  const unitOne = data.get("unitConverterOne");
  const unitTwo = data.get("unitConverterTwo");

  function convert() {
    let resultOne = 0;

    //mm ----------------------------------------------------------------
    if (unitOne == "mm") {
      if (unitTwo == "cm") {
        resultOne = firstInpt / 10;
        document.querySelector(".convResult").innerHTML = resultOne + "cm";
        console.log(resultOne);
      }

      if (unitTwo == "dm") {
        resultOne = firstInpt / 100;
        document.querySelector(".convResult").innerHTML = resultOne + "dm";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt / 1000;
        document.querySelector(".convResult").innerHTML = resultOne + "m";
        console.log(resultOne);
      }

      if (unitTwo == "km") {
        resultOne = firstInpt / 1000000;
        document.querySelector(".convResult").innerHTML = resultOne + "Km";
        console.log(resultOne);
      }
    }
    //cm ----------------------------------------------------------------
    if (unitOne == "cm") {
      if (unitTwo == "mm") {
        resultOne = firstInpt * 10;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }

      if (unitTwo == "dm") {
        resultOne = firstInpt / 10;
        document.querySelector(".convResult").innerHTML = resultOne + "dm";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt / 100;
        document.querySelector(".convResult").innerHTML = resultOne + "m";
        console.log(resultOne);
      }

      if (unitTwo == "km") {
        resultOne = firstInpt / 100000;
        document.querySelector(".convResult").innerHTML = resultOne + "Km";
        console.log(resultOne);
      }
    }
    //dm ----------------------------------------------------------------
    if (unitOne == "dm") {
      if (unitTwo == "mm") {
        resultOne = firstInpt * 1000;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }

      if (unitTwo == "cm") {
        resultOne = firstInpt * 10;
        document.querySelector(".convResult").innerHTML = resultOne + "cm";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt / 10;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }

      if (unitTwo == "km") {
        resultOne = firstInpt / 100000;
        document.querySelector(".convResult").innerHTML = resultOne + "Km";
        console.log(resultOne);
      }
    }
    //m ----------------------------------------------------------------
    if (unitOne == "m") {
      if (unitTwo == "cm") {
        resultOne = firstInpt * 1000;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }
      if (unitTwo == "cm") {
        resultOne = firstInpt * 100;
        document.querySelector(".convResult").innerHTML = resultOne + "cm";
        console.log(resultOne);
      }

      if (unitTwo == "dm") {
        resultOne = firstInpt * 10;
        document.querySelector(".convResult").innerHTML = resultOne + "dm";
        console.log(resultOne);
      }

      if (unitTwo == "km") {
        resultOne = firstInpt / 1000;
        document.querySelector(".convResult").innerHTML = resultOne + "Km";
        console.log(resultOne);
      }
    }
    //km ----------------------------------------------------------------
    if (unitOne == "km") {
      if (unitTwo == "mm") {
        resultOne = firstInpt * 1000000;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }
      if (unitTwo == "cm") {
        resultOne = firstInpt * 100000;
        document.querySelector(".convResult").innerHTML = resultOne + "cm";
        console.log(resultOne);
      }

      if (unitTwo == "dm") {
        resultOne = firstInpt * 10000;
        document.querySelector(".convResult").innerHTML = resultOne + "dm";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt * 1000;
        document.querySelector(".convResult").innerHTML = resultOne + "mm";
        console.log(resultOne);
      }
    }
  }
  convert();
});

function convertArea(firstInpt, unitOne, unitTwo) {
  let resultOne = 0;

  //mm ----------------------------------------------------------------
  if (unitOne == "mm") {
    if (unitTwo == "mm") {
      resultOne = firstInpt * 1;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);
    }
    if (unitTwo == "cm") {
      resultOne = firstInpt / 100;
      convAreaOut.innerHTML = resultOne + "cm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "dm") {
      resultOne = firstInpt / 10000;
      convAreaOut.innerHTML = resultOne + "dm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "m") {
      resultOne = firstInpt / 1000000;
      convAreaOut.innerHTML = resultOne + "m&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "km") {
      resultOne = firstInpt / 1000000000000;
      convAreaOut.innerHTML = resultOne + "Km&sup2";
      console.log(resultOne);
    }
  }
  //cm ----------------------------------------------------------------
  if (unitOne == "cm") {
    if (unitTwo == "mm") {
      resultOne = firstInpt * 100;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "cm") {
      resultOne = firstInpt * 1;
      convAreaOut.innerHTML = resultOne + "cm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "dm") {
      resultOne = firstInpt / 100;
      convAreaOut.innerHTML = resultOne + "dm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "m") {
      resultOne = firstInpt / 10000;
      convAreaOut.innerHTML = resultOne + "m&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "km") {
      resultOne = firstInpt / 10000000000;
      convAreaOut.innerHTML = resultOne + "Km&sup2";
      console.log(resultOne);
    }
  }
  //dm ----------------------------------------------------------------
  if (unitOne == "dm") {
    if (unitTwo == "mm") {
      resultOne = firstInpt * 10000;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "cm") {
      resultOne = firstInpt * 100;
      convAreaOut.innerHTML = resultOne + "cm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "dm") {
      resultOne = firstInpt * 1;
      convAreaOut.innerHTML = resultOne + "dm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "m") {
      resultOne = firstInpt / 100;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "km") {
      resultOne = firstInpt / 100000000;
      convAreaOut.innerHTML = resultOne + "Km&sup2";
      console.log(resultOne);
    }
  }
  //m ----------------------------------------------------------------
  if (unitOne == "m") {
    if (unitTwo == "mm") {
      resultOne = firstInpt * 10000;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);
    }
    if (unitTwo == "cm") {
      resultOne = firstInpt * 100;
      convAreaOut.innerHTML = resultOne + "cm&sup2";
      console.log(resultOne);
    }

    if (unitTwo == "mm") {
      resultOne = 1;
      convAreaOut.innerHTML = resultOne + "mm&sup2";
      console.log(resultOne);

      if (unitTwo == "dm") {
        resultOne = firstInpt * 100;
        convAreaOut.innerHTML = resultOne + "dm&sup2";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt * 1;
        convAreaOut.innerHTML = resultOne + "m&sup2";
        console.log(resultOne);
      }

      if (unitTwo == "km") {
        resultOne = firstInpt / 1000000;
        convAreaOut.innerHTML = resultOne + "Km&sup2";
        console.log(resultOne);
      }
    }
    //km ----------------------------------------------------------------
    if (unitOne == "km") {
      if (unitTwo == "mm") {
        resultOne = firstInpt * 1000000000000;
        convAreaOut.innerHTML = resultOne + "mm&sup2";
        console.log(resultOne);
      }
      if (unitTwo == "cm") {
        resultOne = firstInpt * 10000000000;
        convAreaOut.innerHTML = resultOne + "cm&sup2";
        console.log(resultOne);
      }

      if (unitTwo == "dm") {
        resultOne = firstInpt * 100000000;
        convAreaOut.innerHTML = resultOne + "dm&sup2";
        console.log(resultOne);
      }

      if (unitTwo == "m") {
        resultOne = firstInpt * 1000000;
        convAreaOut.innerHTML = resultOne + "mm&sup2";
        console.log(resultOne);
      }

      if (unitTwo == "Km") {
        resultOne = firstInpt * 1;
        convAreaOut.innerHTML = resultOne + "Km&sup2";
        console.log(resultOne);
      }
    }
  }
}

converterArea.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(converterArea);
  const firstInpt = data.get("firstInptArea");
  const unitOne = data.get("unitConverterAreaOne");
  const unitTwo = data.get("unitConverterAreaTwo");

  convertArea(firstInpt, unitOne, unitTwo);
});
