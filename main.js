// document.getElementById('seven')
//
// // function display(parameters){
// //   if event listener button click is true {
// //     print button value to output
// //   }
//
//   function displayOutput(value of seven) {
//     if true{
//       print value to output
//     }
//   }
//
// seven.addEventListener(onclick, )
//
// button.onclick()

// function displayOutput() {
//     document.getElementById("seven").style.color = "blue";
// }


let outputResult = document.getElementById("result")
//row one
let buttonSeven = document.getElementById("seven")
buttonSeven.addEventListener("click", sevenHandler);

function sevenHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '7';
  }
}
let buttonEight = document.getElementById("eight")
buttonEight.addEventListener("click", eightHandler);

function eightHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '8';
  }
}
let buttonNine = document.getElementById("nine")
buttonNine.addEventListener("click", nineHandler);

function nineHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '9';
  }
}
let buttonDivide = document.getElementById("divide")
buttonDivide.addEventListener("click", divideHandler);

function divideHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '/';
  }
}
//row two
let buttonFour = document.getElementById("four")
buttonFour.addEventListener("click", fourHandler);

function fourHandler() {
  if (outputResult.innerHTML.length < 12) {
  outputResult.innerHTML += '4';
  }
}
let buttonFive = document.getElementById("five")
buttonFive.addEventListener("click", fiveHandler);

function fiveHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '5';
  }
}
let buttonSix = document.getElementById("six")
buttonSix.addEventListener("click", sixHandler);

function sixHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '6';
  }
}
let buttonMultiply = document.getElementById("multiply")
buttonMultiply.addEventListener("click", multiplyHandler);

function multiplyHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '*';
  }
}
//row three
let buttonOne = document.getElementById("one")
buttonOne.addEventListener("click", oneHandler);

function oneHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '1';
  }
}
let buttonTwo = document.getElementById("two")
buttonTwo.addEventListener("click", twoHandler);

function twoHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '2';
  }
}
let buttonThree = document.getElementById("three")
buttonThree.addEventListener("click", threeHandler);

function threeHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '3';
  }
}
let buttonSubtract = document.getElementById("subtract")
buttonSubtract.addEventListener("click", subtractHandler);

function subtractHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '-';
  }
}
//row four
let buttonZero = document.getElementById("zero")
buttonZero.addEventListener("click", zeroHandler);

function zeroHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '0';
  }
}
let buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener("click", decimalHandler);

function decimalHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '.';
  }
}
let buttonAdd = document.getElementById("add")
buttonAdd.addEventListener("click", addHandler);

function addHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '+';
  }
}

//equals
let buttonEquals = document.getElementById("equals")
buttonEquals.addEventListener("click", equalsHandler);

function equalsHandler() {
  // outputResult.innerHTML;
  let equation = outputResult.innerHTML;
  console.log(equation);
  let result = eval(equation);
  console.log(result);
  if (result%1 === 0){
    outputResult.innerHTML = result
  } else
  outputResult.innerHTML = result.toFixed(5);
}


//clear
let buttonClear = document.getElementById("clear")
buttonClear.addEventListener("click", clearHandler);

function clearHandler() {
  outputResult.innerHTML = '';
}
