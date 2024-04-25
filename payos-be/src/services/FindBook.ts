import fs from 'fs';
import path from 'path';
import { Book } from '../interfaces/book';
export function getBookData(): Book {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../database/fakebook.json'));
    const bookData: Book = JSON.parse(rawData.toString()).book;
    return bookData;
}