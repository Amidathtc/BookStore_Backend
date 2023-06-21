import BookModel from "../model/Bookstoremodel"
import { Request, Response } from "express"
import bookStore from "../router/Bookrouter";

// get all books
export const GetAllBooks = async (req: Request, res: Response) => {
    try {

        const books = await BookModel.find()
        return res.status(200).json({
            message: "List of books",
            data: books
        })
    } catch (error: any) {
        return res.status(404).json({
            message: "Books can't be find",
            data: error.message
        })
    }
}

//  get Single book
export const getSingleBook = async (req: Request, res: Response) => {
    try {
        const book = await BookModel.findById(req.params.bookId)
        return res.status(200).json({
            message: "Book found",
            data: book
        })

    } catch (error: any) {
        return res.status(400).json({
            message: "Books not found",
            data: error.message
        })

    }
}

// Create books
export const CreateNewBook = async (req: Request, res: Response) => {
    try {
        const { title, details, ISBN, isBoring, price, authorName } = req.body

        const getISBN = await authorName.charAt(0).toUpperCase()
        const generateISBN = await `${getISBN}_${Math.floor(Math.random() * 1000)}_${Math.floor(Math.random() * 1000)}`

        const createbook = await BookModel.create({
            title, price, ISBN: generateISBN, authorName, details, isBoring
        })
        return res.status(201).json({
            message: "Book Created successfully",
            data: createbook
        })
    } catch (error: any) {
        return res.status(400).json({
            message: "Books can't be created",
            data: error.message
        })
    }
}


export const UpdateBook = async (req: Request, res: Response) => {
    try {
        const { title, price } = req.body
        const update = await BookModel.findByIdAndUpdate(req.params.bookId, { title, price }, { new: true })
        return res.status(200).json({
            message: "Book updated",
            data: update
        })

    } catch (error: any) {
        return res.status(400).json({
            message: "Books can't be Updated",
            data: error.message
        })

    }
}