import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/users.js';
import expressLayouts from 'express-ejs-layouts';
import authRoutes from './routes/auths.js';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import tweetRoutes from './routes/tweets.js';

const app=express();
dotenv.config();

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.json());

// app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017twitter-clone')
.then(() =>{
    console.log('Connected to twitter');
})
.catch(err => console.log(err));

app.use(cookieParser());



// console.log(userRoutes.route.prototype);
// app.use('/api/users', require('./routes/users.js'));
app.use('/api/users', userRoutes);
app.use('/api/auths',authRoutes);
app.use('/api/tweets',tweetRoutes);









app.listen(8000,() =>{
    console.log('Server running at 8000');
})