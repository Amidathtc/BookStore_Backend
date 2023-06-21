import express,{Request,Response} from "express"
import BookModel from "../model/BookModel"


// Get all books
export const GetallBook = async (req:Request, res:Response):Promise<Response> => {
    try {
        const Allbook = await BookModel.find()
        return res.status(200).json({
            message: "List of all books",
            data: Allbook
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message:"Error getting all books",
            data: error.message
        })
        
    }
}

// Get one book 

export const GetSingleBook = async (req:Request, res:Response):Promise<Response> => {
    try {
        const getbook = await BookModel.findById(req.params.bookId)
        return res.status(200).json({
            message: "Book found",
            Data: getbook
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message:"Error getting one book",
            data: error.message
        })
        
    }

}
// Create new book
export const createNewbook = async (req:Request, res:Response):Promise<Response> => {
    try {
        const {title,details,ISBN,authorName, price, isBoring} = req.body
        const genISBN = await authorName.charAt(0).toUpperCase()
        const generateISBN = await `${genISBN}_${Math.floor(Math.random() * 1000)}_${Math.floor(Math.random() * 1000)}`

        const createBook = await BookModel.create({
            title,price,details,authorName, ISBN: generateISBN,isBoring
        })
        return res.status(201).json({
            message: "Book created successfully",
            data: createBook

        })
        
    }catch (error:any) {
        return res.status(400).json({
            message:"Can't be created",
            data: error.message
        })
        
    }
}

// Updating books
export const UpdateNewbook = async (req:Request, res:Response):Promise<Response> => {
    try {
        const {title,price} = req.body
        const updatebook = await BookModel.findByIdAndUpdate( req.params.bookId,{title, price},{new: true})
        return res.status(201).json({
            message : "Book updated",
            data : updatebook

        })
        
    }catch (error:any) {
        return res.status(400).json({
            message:"Can't be Update",
            data: error.message
        })
        
    }
}
