const express = require("express");
const server = express();
server.use(express.static("./conejos"));
server.listen(80, () => {
  console.log("Practica_epc2");
});