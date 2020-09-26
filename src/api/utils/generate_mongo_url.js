require('dotenv').config()

const generate_mongo_url =  (dbname) => {
    return `mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.sjkw7.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`
};

module.exports = generate_mongo_url