import express from 'express';
const router = express.Router();
import { bookController } from '../../controllers/book/index';
router.get('/', bookController.getBook);
export const BookRouter = router;