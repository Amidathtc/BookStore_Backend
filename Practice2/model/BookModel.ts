import mongoose from "mongoose"
import { iBook } from "../interface/BookIntreface";


interface books extends iBook, mongoose.Document{}


const BookstoreSchema = new mongoose.Schema<iBook>({
    isBoring:{
        type:Boolean
    },
    authorName:{
        type:String,
    },
    details:{
        type:String,
    },
    ISBN:{
        type:String,
        unique:true
    },
    price:{
        type:Number
    },
    title:{
        type:String,
        unique:true,
        required: [true, "Please enter a title"]
    }

}, {timestamps: true})

const BookSToreModel = mongoose.model("books", BookstoreSchema)

export default BookSToreModel