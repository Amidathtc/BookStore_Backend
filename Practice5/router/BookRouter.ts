import {Router} from "express"
import { CreatenewBook, GetAllBooks, GetSingleBook, UpdateBook } from "../controller/BookController"

const BookRoute = Router()

// Get single Book
BookRoute.get("/single/bookId", GetSingleBook)

// Get all books

BookRoute.get("/", GetAllBooks)

// Update book 
BookRoute.patch("/update/:bookId", UpdateBook)

// Create a new book

BookRoute.post("/create", CreatenewBook)



export default BookRoute