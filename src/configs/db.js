const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');
module.exports = () => {
    return mongoose.connect(db,{"mongodb://localhost:27017/auth-web11"})
}