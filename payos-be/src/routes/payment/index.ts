import express from 'express';
const router = express.Router();
import { paymentController } from '../../controllers/payment/index';
router.post('/', paymentController.createPayment);
export const PaymentRouter = router;