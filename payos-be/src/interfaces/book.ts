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
    comments: Comment[];
    link: string;
}

export { Book, Comment };