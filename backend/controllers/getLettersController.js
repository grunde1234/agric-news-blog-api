import Letters from "../models/newLetterModel.js";
import expressAsyncHandler from "express-async-handler";
import colors from 'colors'


export const getNewsLetter =  expressAsyncHandler(async(req, res)=>{
    /* if(!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    } */
   const letters = await Letters.find();
   if(!letters){
    throw new Error('There is no content to find')
   }
    res.status(200).json(letters);
})