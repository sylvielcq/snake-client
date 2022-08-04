const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // receive data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();