import express from 'express';
import { setNewsLetter, updateNewsLetter, deleteNewsLetter} from '../controllers/newslettersController.js'

const router = express.Router();

/* /////////////////// */

router.post('/', setNewsLetter);


router.put('/:id', updateNewsLetter);

router.delete('/:id', deleteNewsLetter);


export default router;