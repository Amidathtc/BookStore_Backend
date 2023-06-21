import mongoose from 'mongoose'
import { iBooks } from '../interface/interface';


interface Books extends iBooks, mongoose.Document{}


const BookSchema = new mongoose.Schema<iBooks>({
    authorName: {
        type:String,
    },
    price:{
        type:Number,
    },
    title:{
        type:String,
        required:[true, "please enter a title"],
        unique:true
    },
    ISBN:{
        type:String,
        unique:true
    },
    details:{
        type:String,
    },
    isBoring:{
        type:Boolean,
    }

},{timestamps:true})

const BookModel = mongoose.model('Books',BookSchema)

export default BookModel