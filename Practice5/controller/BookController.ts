import BookStoreModel  from "../model/BookStoreModel";
import express,{Request,Response} from "express";



// Get one Single Book
export const GetSingleBook = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const getbook = await BookStoreModel.findById(req.params.BookId);
        return res.status(200).json({
            message: "Single Book successfully gotten",
            data: getbook

        })

        
    } catch (error:any) {
        return res.status(404).json({
            message: "Error retrieving one single book",
            data: error.message
        })
        
    }

}

// Get all Books 

export const GetAllBooks = async(req:Request, res:Response):Promise<Response> =>{
    try {
        const book = await BookStoreModel.find()
        return res.status(200).json({
            message: "List of Books",
            data : book

        })
    } catch (error:any) {
        return res.status(404).json({
            message: "Error retrieving one single book",
            data: error.message
        })
        
    }

}

//  Create one book
export const CreatenewBook =  async(req:Request, res:Response):Promise<Response> =>{
    try {
        const {title,details,ISBN,isBoring,authorName,price} = req.body
        const getISBN= await authorName.charAt(0).toUpperCase()
        const generateISBN = await `${getISBN}_${Math.floor(Math.random() *1000)}_${Math.floor(Math.random() *1000)}`
        const createbook = await BookStoreModel.create({
            title,authorName,
            price,
            isBoring,
            details,
            ISBN : generateISBN
        })
        return res.status(201).json({
            message: "Book created successfully",
            data: createbook
        })

        
    }  catch (error:any) {
        return res.status(404).json({
            message: "Book can be created",
            data: error.message
        })
        
    }
}

// Updated book 
export const UpdateBook = async(req:Request, res:Response):Promise<Response> =>{
    try {
        const {title,price} = req.body
        const Update = await BookStoreModel.findByIdAndUpdate(req.params.bookId,{title,price}, {new: true})
        return res.status(200).json({
            message: "Book Updated",
            data: Update
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Book can't be updated",
            data: error.message
        })
        
    }
}