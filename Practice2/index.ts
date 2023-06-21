import express from "express"
import BookStoreDB5 from "./config/Database"

const port:number = 8090

const app= express()

BookStoreDB5()


app.listen(port,()=>{
    console.log("Server is on",port)
})