import { Request, Response } from 'express';
import { getBookData } from '../../services/FindBook';
import { PayOSClient } from '../../services/PayOSClient';
const createPayment = async (req: Request, res: Response) => {
    try {
        const cancelURL = req.body.cancelURL;
        if (!cancelURL) {
            res.status(400).json({ message: 'Cancel URL is required' });
            return;
        }
        const bookData = getBookData()
        const order = {
            amount: bookData.price,
            description: bookData.title,
            orderCode: Math.floor(Math.random() * 100) + 1,
            returnUrl: bookData.link,
            cancelUrl: cancelURL,
        }
        const paymentLink = await PayOSClient.createPaymentLink(order);
        const checkoutUrl = paymentLink.checkoutUrl;
        return res.status(200).json({ checkoutUrl });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
export const paymentController = {
    createPayment
}