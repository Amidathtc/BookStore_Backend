import {Router} from "express"
import { GetSingleBook, GetallBook, UpdateNewbook, createNewbook } from "../controller/BookController"

const BookRouter = Router()

// Get all Book 
BookRouter.route("/").get(GetallBook)

// Get one book 
BookRouter.route("/single/:bookId").get(GetSingleBook)

// Create one Book 
BookRouter.route("/create").post(createNewbook)

//  Updaet one book
BookRouter.route("/update/:bookId").patch(UpdateNewbook)

export default BookRouter