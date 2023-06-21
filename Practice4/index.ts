import express,{Application} from "express"
import BookStoreDatabase3 from "./config/Database"
import books from "./router/BookStoreRoute"

const port:number =2096

const app:Application = express()
app.use(express.json())
app.use("/api/books", books)

BookStoreDatabase3()


app.listen(port,()=>{
    console.log("listening on port", port)

})