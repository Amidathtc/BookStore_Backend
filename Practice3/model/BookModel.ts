import mongoose from "mongoose";
import { iBook } from "../interface/Interface";

interface Books extends iBook, mongoose.Document{}


const BookSchema = new mongoose.Schema<iBook>({
    authorName:{
        type:String
    },
    details:{
        type:String
    },
    ISBN:{
        type:String,
        unique:true
    },
    isBoring:{
        type:Boolean
    },
    price:{
        type:Number
    },
    title:{
        type:String,
        unique:true,
        required: [true, "Please enter a title"]
    }

},{timestamps:true})

const BookModel = mongoose.model("books", BookSchema)

export default BookModel;