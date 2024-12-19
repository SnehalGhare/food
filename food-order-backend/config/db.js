import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://ghare2032:ghare2032@cluster0.iuq7v.mongodb.net/food-del').then(()=>console.log("DB connected"));
}


