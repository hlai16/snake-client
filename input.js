const { stdin } = require("process");

let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    // stdin.on("data", saySth);
    return stdin;
};

const handleUserInput = function (key) {
    // your code here
    if (key === 'w' || key === 'W') {
        connection.write('Move: up');
    } else if (key === 'a' || key === 'A') {
        connection.write('Move: left');
    } else if (key === 's' || key ==='S') {
        connection.write('Move: down');
    } else if (key === 'd' || key === 'D') {
        connection.write('Move: right');
    } else if (key === 'j' || key === 'J') {
        connection.write('Say: Munch, munch, munch...');
    } else if (key === '\u0003') {
        process.exit();
    }
};

// const saySth = (msg) => {
//     connection.write(`Say: ${msg}`);
// }

module.exports = {
    setupInput,
    handleUserInput
}