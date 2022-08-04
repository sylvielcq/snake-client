const connect = require('./client');


// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// HandleUserInput determines what happens when a particular
// key is pressed on the keyboard input.

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();