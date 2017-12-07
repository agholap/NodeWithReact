//key.js - figure out what set of credentials to return

//module.exports = require('./dev.js');
if (process.env.NODE_ENV === "production") {
  module.exports = require('./prod');
  console.log(process.env);
} else {
  module.exports = require('./dev');
  console.log("amol log "+ process.env.NODE_ENV);

}
