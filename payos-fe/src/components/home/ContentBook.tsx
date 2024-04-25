import BackGroundImage from "../../assets/background.jpg";
import Typewriter from "typewriter-effect";
import { useBookStore } from "../../states/book.state";
export function ContentBook() {
    const { book } = useBookStore();
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
            <div className="flex items-center justify-center gap-2 text-white">
                <div className="w-[500px]">
                    <div className="text-[20px] italic">
                        <Typewriter
                            options={{
                                strings: '"' + book.content?.join(" ") + '"',
                                autoStart: true,
                                delay: 50,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </div>
                    <hr className="w-1/4 mt-1 border-2 border-white" />
                    <h1 className="text-[30px] font-bold mt-1">{book.title}</h1>
                    <p className="text-[20px] font-semibold italic mt-1">
                        {book.author?.join(", ")}
                    </p>
                </div>
                <div className="w-[500px] shrink-0">
                    <img
                        src={book.thumbnail}
                        className="object-cover w-full h-full"
                        alt="book-image"
                    />
                </div>
            </div>
        </div>
    );
}
