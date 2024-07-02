import mongoose  from "mongoose";
export const conn=async()=>{
    await mongoose.connect('mongodb+srv://sudhanshusagar077:7277541915@cluster0.cynuwvv.mongodb.net/food-del').then(()=>{
        console.log("db connected")
    })
}