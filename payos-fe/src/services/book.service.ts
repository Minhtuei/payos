import axios from 'axios';
const getBook = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
    return response.data;
}
export const bookService = {
    getBook
}