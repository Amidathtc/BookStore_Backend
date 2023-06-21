import mongoose,{Document,Schema,model} from "mongoose"
import { iBook } from "../interface/interface";

interface Books extends iBook, Document{}

const BookSchema2 = new Schema<iBook>({
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
        required: [true, "please enter a title"]
    },
    authorName:{
        type:String,
    },
    details:{
        type:String,
    },
    isBoring:{
        type:Boolean
    }
},{timestamps:true})

const BookStoreModel = model<Books>("Books", BookSchema2)

export default BookStoreModel