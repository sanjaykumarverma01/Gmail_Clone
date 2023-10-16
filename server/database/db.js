import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()


const DB_URL = `mongodb+srv://Sanjaykumar:sanjay1222@sanjaycluster.op8h2mp.mongodb.net/gmail`

const Connection = () =>{
    
    try {
        mongoose.connect(DB_URL, {useNewUrlParser:true})   // it takes two arguments 1. db url 2. attribute useNewsUrlParse
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log('Error while connecting database', error.message);
    }
}


export default Connection