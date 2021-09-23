const net = require("net");
const IP = '135.23.223.133';
const PORT = 50542;
const connect = function () {
  
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    
  
    conn.on('connect', () => {
      console.log('Joan is in da house!');
      conn.write('Name: JL');
      conn.write('Say: I brought Pizza!')
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
    IP,
    PORT,
    connect
  };