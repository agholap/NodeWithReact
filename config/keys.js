//key.js - figure out what set of credentials to return

//module.exports = require('./dev.js');
if (process.env.NODE_ENV === "production") {
  module.exports = {
    // googleClientID:process.env.GOOGLE_CLIENT_ID,     
    // googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // mongoURI: process.env.MONGO_URI,
    // cookieKey: process.env.COOKIE_KEY
    googleClientID:
    "477506738693-0hirpqqslo91a58ldro5rq4th9jfv63c.apps.googleusercontent.com",
  googleClientSecret: "1zoBMI1uO557dFQjQ6G6h6G5",
  //mongoURI: "mongodb://amol:welcome12!@@ds119306.mlab.com:19306/emily-prod",
  mongoURI: "mongodb://amol:password@ds011268.mlab.com:11268/emaily1-dev",
  cookieKey: "2sadad13131akkkskkskks"
  };
  console.log(process.env);
} else {
  //module.exports = require('./dev');
  module.exports = {
    googleClientID:
      "610220090243-3crumaorn7medjf2stidhllmmm3ib171.apps.googleusercontent.com",
    googleClientSecret: "qd4uDCAoEUvyYbQrhMkcDajT",
    mongoURI: "mongodb://amol:password@ds011268.mlab.com:11268/emaily1-dev",
    cookieKey: "2sadad13131akkkskkskks"
  };  

}
