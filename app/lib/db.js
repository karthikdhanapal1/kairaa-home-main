// const mongoose = require("mongoose");

// const mongoURI = 'mongodb+srv://thadkshinss2:123456789t@cluster0.m2xebdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// // Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err.message);
//   });

import mongoose from "mongoose";
const connectMongoDB = () => {
try {
mongoose.connect (process.env.DATABASE_URL);
console.log("Connected to MongoDB.");
} catch (error) {
console.log(error);
}
};
export default connectMongoDB;