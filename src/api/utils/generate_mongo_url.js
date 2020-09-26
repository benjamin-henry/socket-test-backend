require('dotenv').config()

const generate_mongo_url =  (dbname) => {
    return `mongodb+srv://4l4rmpu5h3radmin:5sqvt2zMuhBmtOEc@cluster0.sjkw7.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`
};

module.exports = generate_mongo_url