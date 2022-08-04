const net = require("net");
const { IP, PORT, name } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${name}`);
    // conn.write("Move: up");
  });

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);

  // receive data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = connect;

/*
Movement commands supported by the game server:
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/