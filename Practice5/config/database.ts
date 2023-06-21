import mongoose from "mongoose"


const url = "mongodb://0.0.0.0:27017/BookStore2"

const BookStore2 = async()=>{
    try {
        const dbconnect = await mongoose.connect(url)
        console.log("")
        console.log("Database is connected")
        
    } catch (error:any) {
        console.log("error occured", error.message)
        
    }

}
export default BookStore2