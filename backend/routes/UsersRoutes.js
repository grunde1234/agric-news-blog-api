import express from 'express'
import { registerUser, getContent, loginUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';


const userRouter = express.Router();

//This is the endpoint for the register path
userRouter.post('/', registerUser)

//This is the endpoint for the login path
userRouter.post('/login', loginUser)

//This is the endpoint for the get content path
userRouter.get('/contents', protect,getContent)

export default userRouter;