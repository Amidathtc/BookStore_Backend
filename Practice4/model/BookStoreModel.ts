import mongoose from "mongoose";
import { iBooks } from "../interface/BookInterface";


interface books extends iBooks, mongoose.Document{}

const BookStoreSchema = new mongoose.Schema<iBooks>({
    authorName:{
        type:String
    },
    details:{
        type: String
    },
    ISBN:{
        type: String,
        unique:true
    },
    price:{
        type:Number
    },
    isBoring:{
        type:Boolean
    },
    title:{
        type:String,
        unique:true,
        required: [true, "Enter a title please"]
    }
    
},{timestamps:true})

const BookStoreModel3 = mongoose.model("Books", BookStoreSchema)

export default BookStoreModel3