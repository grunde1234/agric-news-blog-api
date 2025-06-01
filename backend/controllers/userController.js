import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/usersAddModel.js'




export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email || !req.body) {
    res.status(400);
    throw new Error('Fill in the blanks');
  }

  //Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists with that email');
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    password: hashedPassword,
    email,
  });
  if(user){
        res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
    }
    else{
        res.status(400);
        throw new Error('invalid user')
    }
});


export const loginUser = expressAsyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    /* if(!email || !password){
        res.status(400);
        throw new Error('Please fill in the fields')
    } */
   const existingUser = await User.findOne({email});
   console.log('existingUser:', existingUser);

   if(existingUser && (await bcrypt.compare(password, existingUser.password))) {
    res.status(201).json({
      _id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
     token: generateToken(existingUser._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
})

export const getContent = expressAsyncHandler(async(req,res)=>{
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})



const generateToken = (id)=>{
  return  jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'});
}