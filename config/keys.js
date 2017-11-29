// module.exports = {
//   googleClientID:"610220090243-3crumaorn7medjf2stidhllmmm3ib171.apps.googleusercontent.com",
//   googleClientSecret: "qd4uDCAoEUvyYbQrhMkcDajT",
//   mongoURI: "mongodb://amol:password@ds011268.mlab.com:11268/emaily1-dev",
//   cookieKey: "2sadad13131akkkskkskks"
// };

//key.js - figure out what set of credentials to return
if(process.env.NODE_ENV == 'production')
{
  module.exports = require('./prod.js');
}
else
{
 module.exports = require('./dev.js');
}