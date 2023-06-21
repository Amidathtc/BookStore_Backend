import express, { Application } from "express"
import BookStore2 from "./config/database"
import books from "./router/BookRouter"



const port:number = 3099
const app:Application = express();
app.use(express.json())
.use("/api/book", books)

app.get("/",(req, res)=>{
    try {
        return res.status(200).json({
            message: "Server is okay and running"
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message: "Error occured",
            data: error.message
        })
        
    }
})
BookStore2()



app.listen(port,()=>{
    console.log("listening on port", port)
})