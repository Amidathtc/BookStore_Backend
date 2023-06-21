import express, {Request,Response} from "express"
import BookstoreDatabase1 from './config/database'
import books from "./router/Bookrouter"

const port:number = 2001
const app = express()
app.use(express.json())
.use("/api/books", books)


app.get("/", (req:Request,res:Response)=>{
    try {
        return res.status(200).json({
            message: "Server is up and ready"
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message: "Error occured",
            data: error.message
        })
        
    }
})
BookstoreDatabase1()


app.listen(port,()=>{
    console.log("Server is Runnning", port)
})