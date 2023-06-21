import mongoose from "mongoose"


const url = "mongodb://0.0.0.0:27017/BookStore5"


const BookStoreDB5 = async()=>{
    try {
        const connect = await mongoose.connect(url)
        console.log("")
        console.log("Database is on sha")

        
    } catch (error) {
        console.log("error occured")
        
    }
}
export default BookStoreDB5