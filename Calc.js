// This is he model
//No HTML or CSS in this area -just javascript

//Error Troubleshooting bank:
//Following example caused by lack of notify within function
//Uncaught SyntaxError: Unexpected token .
//at Object.solution (Calc.js:94)
//at HTMLInputElement.onclick (calculator.html:63)

//Error Troubleshooting bank:
//Uncaught TypeError: Cannot read property 'addNumber' of undefined
//at HTMLInputElement.onclick (calculator.html:54)

//Error Troubleshooting bank:
//VM180 calculator.html:62 Uncaught TypeError: Cannot read
//property 'clearBtn' of undefined //at HTMLInputElement.onclick (VM180 calculator.html:62)
    //I was missing   document.getElementById('button_Clear').addEventListener('click', clearBtn);

//Pro.V included this that was missing:
//also suggested changing variable name'x' to 'formula'
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
    document.getElementById('button_Clear').addEventListener('click', clearBtn);  //updated: uncommented this
    document.getElementById('sol').addEventListener('click', solution);
  }

  // I was missing this and it was needed
  function addNumber(num) {
    console.log("addNumber!!");
    formula += num;
    notify(num);
    notify(formula);
  }

  //These are the function corrections:
  //Removed eval, as it only should appear when we use '=' sign button
  //Removed 'retun', because it belongs at the end of the
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


  function multiply() {
  //teting with console
  console.log("Multiply!!!");
    formula += "*";
  }

  function divide() {
  //teting with console
  console.log("Divide!!!");
    formula += "/";
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

  ///needs another notify
  function clearBtn() {
  //teting with console
  console.log("Clear!!!");
    formula = ""; //updated -->removed + sign & 0
    notify(formula); //updated
  }

  //need new notify
  function solution() {
  //teting with console
  console.log("Soultion");
  console.log("formula = ", formula );//DH
  console.log(eval(formula)); //updated
  var ans = eval(formula); //updated
  console.log("Answer = ",  formula += " = " + ans );//DH
  formula = ans;  //updated
  notify(formula);//updated

  //code to add "clear funciton here if no other
  //operators are presed
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


  //Not having these correct will give: calculatorhtml:##
  //Uncaught TypeError:
  return {
    addNumber: addNumber,
    add: add,
    multiply: multiply,
    subtract: subtract, //updated (spelling error)
    divide: divide,
    percent: percent, //updated (missing)
    solution:solution,
    decimal: decimal, //updated (missing)
    clearBtn: clearBtn, //updated (missing)
    listen: listen
  };
})();
