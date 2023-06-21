import mongoose from 'mongoose';


const url = 'mongodb://0.0.0.0:27017/BookStore3'


const BookStoreDatabase3 = async()=>{
    try {

        const connentDb = await mongoose.connect(url)
        console.log("")
        console.log("Connected to Mongoose")
        
    } catch (error) {
        console.log("error occured when connect")
        
    }
}

export default BookStoreDatabase3