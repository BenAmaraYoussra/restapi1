const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        awaitmongoose.connect(process.env.DB_URI);
        console.log("DataBase connected ...");
    }
    catch(error){
        console.log("Database is not connected!!!", error)
    }
};
module.exports = connectDB;