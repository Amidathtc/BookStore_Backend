import {Router} from "express"
import { CreateNewBook, GetAllBooks, UpdateBook, getSingleBook } from "../controller/BookStoreController"


const bookStore= Router()

// get all books
bookStore.get("/", GetAllBooks)

// get Single books
bookStore.get("/single/:bookId", getSingleBook)

// Create new book

bookStore.post("/create", CreateNewBook)

// update books 
bookStore.patch("/update/:bookId", UpdateBook)


export default bookStore