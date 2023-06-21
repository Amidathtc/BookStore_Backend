import mongoose from "mongoose";

const url = 'mongodb://0.0.0.0:27017/BookStoreDB4'


const BookStore4 = async()=>{
    try {
        const connect = await mongoose.connect(url)
        console.log("")
        console.log("Database connection")
    } catch (error:any) {
        console.log("Error occured when connecting to database", error.message)
        
    }
}
export default BookStore4