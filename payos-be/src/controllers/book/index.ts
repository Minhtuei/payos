import { Request, Response } from 'express';
import { getBookData } from '../../services/FindBook';
const getBook = (req: Request, res: Response) => {
    const { link, ...bookData } = getBookData();
    res.status(200).json(bookData);
}
export const bookController = {
    getBook
}