import dotenv from 'dotenv'
dotenv.config()

export default (dbname) => {
    return `mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.sjkw7.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`
};