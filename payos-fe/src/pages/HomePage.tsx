import { CommentBook, ContentBook, ShowingBook } from "../components/home";
import { useCallback, useEffect } from "react";
import { useRef } from "react";
import { useBookStore } from "../states/book.state";
export function HomePage() {
    const HOMEPAGE_COMPONENTS = [ShowingBook, ContentBook, CommentBook];
    const targetRef = useRef<HTMLDivElement>(null);
    const { getBookInfo, isLoaded } = useBookStore();
    const handleButtonClick = useCallback(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [targetRef]);
    useEffect(() => {
        getBookInfo();
    }, []);
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div className="h-screen overflow-y-auto snap-mandatory snap-y scrollbar-hide">
            {HOMEPAGE_COMPONENTS.map((Component, index) => (
                <div
                    key={index}
                    className="h-full snap-center snap-always"
                    ref={index === 1 ? targetRef : null}
                >
                    {index === 0 ? (
                        <Component onButtonClick={() => handleButtonClick()} />
                    ) : (
                        <Component />
                    )}
                </div>
            ))}
        </div>
    );
}
