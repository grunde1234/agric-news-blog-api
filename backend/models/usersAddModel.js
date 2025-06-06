import mongoose from "mongoose";

const adminsAdd = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
    },
},{
    timestamps: true
})

const User = mongoose.model('User', adminsAdd);
export default User;

