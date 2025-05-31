import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(connect.connection.host.cyan.underline)
    }catch(err){
    console.log(err.message);
    }
}