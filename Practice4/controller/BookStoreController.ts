import express,{Request,Response} from "express"
import BookStoreModel3 from "../model/BookStoreModel"



// All books
export const GetAllBooks = async(req:Request, res:Response):Promise<Response> =>{
    try {
        const AllBooks = await BookStoreModel3.find()
        return res.status(200).json({
            message: "AllBooks",
            data: AllBooks
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Can't get all books", 
            data: error.message
        })
    }

}

// get Single Book

export const GetSingleBook = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const book = await BookStoreModel3.findById(req.params.bookId)
        return res.status(200).json({
            message: "Book Gotten",
            data: book
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Can't get single book",  
            data: error.message
        })
    }
}

// Create a new book

export const CreateNewBook = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {title,price,authorName,details,ISBN,isBoring} = req.body
        const genISBN = await authorName.charAt(0).toUpperCase()
        const generateISBN = await `${genISBN}_${Math.floor(Math.random()*1000)}_${Math.floor(Math.random()*1000)}`
        const CreateBook = await BookStoreModel3.create({
            title,price,details,ISBN : generateISBN, isBoring, authorName
        })
        return res.status(200).json({
            message: "Book created successfully",
            data: CreateBook
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Book not created successfully",  
            data: error.message
        })
    }
}
// Updating the book

export const UpdateBook = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {title,price} = req.body
        const Update = await BookStoreModel3.findByIdAndUpdate(req.params.bookId, {title,price}, {new:true})
        return res.status(201).json({
            message: "Book updated successfully",
            data: Update
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Book can't be updated",  
            data: error.message
        })
    }
}
