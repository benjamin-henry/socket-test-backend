const mongoose = require('mongoose')

const ApiUserSchema = mongoose.Schema({
    app_name: String,
    email: String,
    password: String,
    api_key: String,
    validated: Boolean
});

module.exports = mongoose.model('apiuserchema', ApiUserSchema)