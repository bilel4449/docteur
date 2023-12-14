const config=require('config');
const db=config.get('db');
const mongoose=require('mongoose');
const connectDB=async()=>{
    try {
       await mongoose.connect(db) ;
       console.log('data base connected');
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB;