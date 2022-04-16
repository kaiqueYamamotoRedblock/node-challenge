require("dotenv").config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;