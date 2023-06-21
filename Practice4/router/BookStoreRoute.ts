import {Router} from "express"
import { CreateNewBook, GetAllBooks, GetSingleBook, UpdateBook } from "../controller/BookStoreController"

const BookStoreRoute = Router()
// Get one book
BookStoreRoute.get("/single/:bookId", GetSingleBook)

// Get all books
BookStoreRoute.get("/", GetAllBooks)

// Create Add Book
BookStoreRoute.post("/add", CreateNewBook)

// Update Book
BookStoreRoute.patch("/update/:bookId", UpdateBook)

export default BookStoreRoute