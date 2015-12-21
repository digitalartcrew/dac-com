var mongoose = require('mongoose'); 
mongoose.set('debug',true);
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/dac-com");

module.exports.Post = require("./post");
