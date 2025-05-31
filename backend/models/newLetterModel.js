import mongoose from 'mongoose'


const newsLetters = mongoose.Schema({
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