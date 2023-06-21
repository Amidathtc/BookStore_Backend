import {Request,Response} from "express"
import BookSToreModel from "../model/BookModel"

// Getting all books

export const getAllBooks = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const allBooks = await BookSToreModel.find()
        return res.status(200).json({
            message: "List of Books Gotten",
            data: allBooks
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message: "Can't get all books",
            data: error.message
        })
        
    }
}

// Getting single book

 export const GetSingleBook = async (req:Request, res:Response)=>{
    try {
        const book = await BookSToreModel.findById(req.params.bookId)
        return res.status(200).json({
            message: "Book found",
            data: book
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message: "Can't single book",
            data: error.message
        })
        
    }
}

//  Creating books 
export const CreateNewBook = async (req:Request,res:Response)=>{
    try {
        const {title, authorName, ISBN, price, details,isBoring} = req.body
        const getISBN1= await authorName.charAt(0).toUpperCase()
        const generateISBN = await `${getISBN1}_${Math.random()*1000}_${Math.random()*1000}`

        const newBook = await BookSToreModel.create({
            title,authorName,ISBN: generateISBN, price, details, isBoring
        })
        return res.status(201).json({
            message: "Book created successfully",
            data : newBook,
        })

    }catch (error:any) {
            return res.status(400).json({
                message: "Book creation error",
                data: error.message
            })
            
        }

}

// Updating of books 

export const UpdateBook = async (req:Request, res:Response)=>{
    try {
        const {title,price} = req.body
        const UpdatesomeBook = await BookSToreModel.findByIdAndUpdate(req.params.bookId, {title, price}, {new:true})
        return res.status(201).json({
            message: "Book updated",
            data: UpdatesomeBook
        })
        
    } catch (error:any) {
        return res.status(400).json({
            message: "Updating not completed",
            data: error.message
        })
        
    }

}




