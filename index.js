import express from 'express';
import dotenv from 'dotenv';
// import { Register } from './Controllers/Auth.controllers.js';
import morgan from 'morgan';
import cors from 'cors'
import router from './Routes/index.routes.js';
import mongoose from 'mongoose';

const app = express ();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
dotenv.config()

app.get('/', function(req, res){
    res.send('homepage')
})

app.use('/api/v1', router)

mongoose.connect(process.env.MONGOURL).then(() => console.log('Databased Connected...'))

app.listen(8000, () => console.log("app is running on port 8000"))