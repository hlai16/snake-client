const net = require("net");
const { setupInput } = require('./input');
// establishes a connection with the game server
const connect = function () {
  
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  conn.on('connect', () => {
    console.log('Joan is in da house!');
    conn.write('Name: JL');
    // const callback = () => {
    //   conn.write('Move: up');
    // }
    // const delay = 50;
    // setInterval(callback, delay);
  });

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(`Server says: ${data}`);
  });


  return conn;
};

module.exports = {
    connect,
}