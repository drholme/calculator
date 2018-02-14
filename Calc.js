// This is he model
//No HTML or CSS in this area -just javascript

//The target event property returns the element that triggered the event.
//The target property gets the element on which the event originally occurred,
//opposed to the currentTarget property, which always refers to the element
//whose event listener triggered the event.
//ataching event listener to button pad
//array where I store the formlula, when when they clear we

//Pro.V included this that was missing:
//aslo suggested changing variable name'x' to 'formula'
var calculator = (function() {
  //At first, this was stand alone and used the commented next insted of empty string
  var formula = ""; //document.calculator.display.value;

  //I had this already without Prof. V help and was the only thing that was right
  function addListeners() {
    document.getElementById('sub').addEventListener('click', subtract);
    document.getElementById('mult').addEventListener('click', multiply);
    document.getElementById('adding').addEventListener('click', add);
    document.getElementById('divi').addEventListener('click', divide);
    document.getElementById('deci').addEventListener('click', decimal);
    document.getElementById('perc').addEventListener('click', percent);
    //document.getElementById('Button_Clear').addEventListener('click', clearBtn);
  }

  // I was missing this and it was needed
  function addNumber(num) {
    console.log("addNumber!!");
    formula += num;
    notify(num);
  }

  //These are the corrected functions

  //Removed eval, as it only should appear when we use '='
  //removed retun, because it belongs at the end of the
  //calculator function
  function add() {
  //teting with console
  console.log("Add!!!");
    //eval(formula);
    formula += "+";
    //return sum;
  }

  function subtract() {
  //teting with console
  console.log(" Subract!!!");
    formula += "-";
  }

  function divide() {
  //teting with console
  console.log("Divide!!!");
    formula += "&#247";
  }

  function multiply() {
  //teting with console
  console.log("Multiply!!!");
    formula += "x";
  }

  function divide() {
  //teting with console
  console.log("Divide!!!");
    formula += "&#247";
  }

  function percent() {
  //teting with console
  console.log("Percent!!!");
    formula += "%";
  }

  function decimal() {
  //teting with console
  console.log("Decimal!!!");
    formula += ".";
  }

  //needs another notify
  function clearBtn() {
  //teting with console
  console.log("Clear!!!");
    formula += "0";

  }

  //need new notify
  function solution() {
  //teting with console
  console.log("Solution");
  eval(formula);

  }



  //the listeners code was taken directly from the tictactoe js file
  var listeners = [];

  // this function registers/adds a listener
  function listen(cb) {
    // collect them in the listeners array
    listeners.push(cb);
  }

  // notify all listeners of a change to the grid
  function notify(num) {
    // iterate through the array and call the listen callback function
    for (var i = 0; i < listeners.length; i++) {
      // call the function
      listeners[i](num);
    }
  }



  return {
    addNumber: addNumber,
    add: add,
    multiply: multiply,
    substract: subtract,
    divide: divide,
    percent: percent,
    solution:solution,
    listen: listen
  };

})();
