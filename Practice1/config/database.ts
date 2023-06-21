import mongoose from "mongoose";

const url = 'mongodb://0.0.0.0:27017/BookStoreDb1'

const BookstoreDatabase1 = async()=>{
    try {
        let dbconnect = await mongoose.connect(url)
        console.log("")
        console.log("Database Connection")
        
    } catch (error:any) {
        console.log("Failed to connect to", error.message)
        
    }

}

export default BookstoreDatabase1