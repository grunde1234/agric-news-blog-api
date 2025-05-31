import express from 'express';
import { getNewsLetter } from '../controllers/getLettersController.js';

const routerLetters = express.Router();


routerLetters.get('/', getNewsLetter);

export default routerLetters;