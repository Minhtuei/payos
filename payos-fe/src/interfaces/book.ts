interface Comment {
    id: number,
    username: string;
    content: string;
    rating: number;
    avatar: string;
}
interface Book {
    id: number;
    title: string;
    author: string[];
    content: string[];
    category: string[];
    price: number;
    rating: number;
    thumbnail: string;
    status: string;
    comment: Comment[];
}
interface BookStore {
    book: Book;
    isLoaded: boolean;
    getBookInfo: () => Promise<void>;
}
export type { Book, Comment, BookStore };