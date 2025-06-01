import mongoose from 'mongoose'


const newsLetters = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title:{
        type: String,
        required: [true, 'Please add a text']
    },
    content:{
        type: String,
        required: [true, 'Please add a content']
    }
},
{
    timestamps: true
})

const Letters = mongoose.model('letters', newsLetters);
export default Letters