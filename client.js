const net = require("net");
const { stdin } = require("process");
// establishes a connection with the game server
const connect = function () {
  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
      };
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  conn.on('connect', () => {
    console.log('Joan is in da house!');
    conn.write('Name: JL');
  });

  conn.on('connect', () => {
    const moves = ['Move: up', 'Move: up', 'Move: left', 'Move: left', 'Move: up'];

    let delay = 0;

    for (const move of moves) {
    setTimeout(() => {
    conn.write(move), delay;
   },
    delay += 500);
   }
  });

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(`Server says: ${data}`);
  });

  const handleUserInput = function () {
    // your code here
    if (key === '\u0003') {
      console.log('disconnecting');
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);


  return conn;
};

console.log("Connecting ...");

module.exports = {
    connect,
}