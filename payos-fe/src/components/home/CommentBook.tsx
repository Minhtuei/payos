import BackGroundImage from "../../assets/background.jpg";
import StarIcon from "../../assets/star.png";
import FavoriteIcon from "../../assets/favorite.png";
import { useEffect, useState } from "react";
import { useBookStore } from "../../states/book.state";
export function CommentBook() {
    const { book } = useBookStore();
    const [currentComment, setCurrentComment] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComment((prev) => (prev + 1) % book.comment.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div
            className="flex items-center justify-center w-full h-full gap-3"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${BackGroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center justify-center gap-2 text-white rounded-md bg-opacity-40 bg-slate-600 ">
                <div className="flex flex-col items-center gap-2 p-4 w-[800px]">
                    <p className="text-[30px] text-center">
                        {'"' + book.comment[currentComment].content + '"'}
                    </p>
                    <img
                        src={book.comment[currentComment].avatar}
                        className="object-cover w-20 h-20 rounded-full"
                        alt="avatar"
                    />
                    <p className="text-[20px] font-semibold">
                        {book.comment[currentComment].username}
                    </p>
                    <div className="flex items-center gap-2">
                        {Array.from({
                            length: book.comment[currentComment].rating,
                        }).map((_, index) => (
                            <img
                                key={index}
                                src={StarIcon}
                                className="w-6 h-6"
                                alt="star"
                            />
                        ))}
                        {Array.from({
                            length: 5 - book.comment[currentComment].rating,
                        }).map((_, index) => (
                            <img
                                key={index}
                                src={FavoriteIcon}
                                className="w-6 h-6"
                                alt="favorite"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
