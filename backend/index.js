import express from 'express';
import cors from 'cors';
import { conn } from './config/db.js';


//app config
const app=express();
const port=4000;


//middleware
app.use(express.json());
app.use(cors());

//db connection
conn();
app.get("/", (req, res) => {
    res.send("API Working")
});

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
});

//mongodb+srv://sudhanshusagar077:7277541915@cluster0.cynuwvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0