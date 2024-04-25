import { create } from 'zustand';
import { bookService } from '../services/book.service';
import { Book, BookStore } from '../interfaces/book';
export const useBookStore = create<BookStore>((set) => ({
    book: {} as Book,
    isLoaded: false,
    getBookInfo: async () => {
        try {
            set({ isLoaded: false });
            const book = await bookService.getBook();
            set({ book: book, isLoaded: true });
        } catch (error) {
            console.log(error);
        }
    },
}));