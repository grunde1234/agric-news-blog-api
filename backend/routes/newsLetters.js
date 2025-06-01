import express from 'express';
import { setNewsLetter, updateNewsLetter, deleteNewsLetter} from '../controllers/newslettersController.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

/* /////////////////// */

router.post('/', protect, setNewsLetter);


router.put('/:id',protect ,updateNewsLetter);

router.delete('/:id', protect,deleteNewsLetter);


export default router;