const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
        console.log(process.env.MONGO_URI);
        await mongoose.connect("mongodb+srv://jagadeesh9383_db_user:jagadeesh@cluster0.wwnc9ky.mongodb.net/?appName=Cluster0")
        console.log("db connected")

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb;
