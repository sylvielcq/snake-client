// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
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
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'm') {
    connection.write("Say: Make way!");
  }
  if (key === 's') {
    connection.write("Say: ssssssssssss");
  }
};


module.exports = setupInput;