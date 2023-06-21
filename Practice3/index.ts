import express from "express"
import BookStore4 from './config/Database'
import books from "./router/Bookrouter"

const port:number = 2000

const app = express()
app.use(express.json())

.use("/api/books", books)
BookStore4()

app.listen(port,()=>{
    console.log("Server is on", port)
})