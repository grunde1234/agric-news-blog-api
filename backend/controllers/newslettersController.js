import Letters from "../models/newLetterModel.js";
import expressAsyncHandler from "express-async-handler";
import colors from 'colors'


export const setNewsLetter = expressAsyncHandler(async(req, res)=>{
    /* if(!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    } */
   
   if(!req.body.content || !req.body.title){
    res.status(400);
    throw new Error("Please fill in the fields")
   }
   const letter = await Letters.create({
    title: req.body.title,
    content: req.body.content
   })
   console.log('creation successful'.green.underline)
    res.status(200).json(letter);
}
)

export const updateNewsLetter = expressAsyncHandler(async(req, res) => {
    const letter = await Letters.findById(req.params.id);
   if(!letter) {
        res.status(400);
        throw new Error('please fill in the form');
    }
    const updateLetter = await Letters.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}

    );
    res.status(200).json(updateLetter);
})


export const deleteNewsLetter = expressAsyncHandler (async(req, res)=>{
     const letter = await Letters.findById(req.params.id);
   if(!letter) {
        res.status(400);
        throw new Error('please fill in the form');
    }
    await letter.deleteOne();

    res.status(200).json({id: req.params.id});

})

