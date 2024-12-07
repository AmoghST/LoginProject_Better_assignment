require('dotenv').config();
const mongoose = require('mongoose');



const url = 'mongodb://localhost:27017/demologinassignment';




async function connectToMongo(){
    await mongoose.connect(url).then(()=>{console.log("connection is successful")}).catch(()=>{console.log("database connection error")})
}

module.exports = connectToMongo;












// mongodb://localhost:27017/loginproject
//this is the mongodb compass connection string 