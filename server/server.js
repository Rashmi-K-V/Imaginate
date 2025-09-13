import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;

const app = express();

// middleware - json,cors

app.use(express.json());
app.use(cors());

await connectDB(); 

app.use('/api/user',userRouter); //user routes

app.use('/api/image',imageRouter); //image route


app.get('/',(req,res)=>res.send("API Working....."))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));