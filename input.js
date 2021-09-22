const { stdin } = require("process");

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
};

const handleUserInput = function () {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

module.exports = {
    setupInput,
    handleUserInput
}