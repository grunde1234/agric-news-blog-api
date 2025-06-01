import express from 'express';
import { getNewsLetter } from '../controllers/getLettersController.js';
import { protect } from '../middleware/authMiddleware.js';

const routerLetters = express.Router();


routerLetters.get('/',protect,getNewsLetter);

export default routerLetters;