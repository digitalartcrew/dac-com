var mongoose = require('mongoose'); 
mongoose.set('debug',true);
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/openhouseapp");

module.exports.Home = require("./home");
