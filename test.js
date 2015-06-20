var rsJson = require("./index");

console.log(rsJson.write("./test.json", {test: true}));

console.log(rsJson.read("./test.json"));