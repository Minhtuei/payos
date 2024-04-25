import BackGroundImage from "../../assets/background.jpg";
import { useBookStore } from "../../states/book.state";
import { paymentService } from "../../services/payment.service";
interface HomePageProps {
    onButtonClick?: () => void;
}
export function ShowingBook({ onButtonClick }: HomePageProps) {
    const { book } = useBookStore();
    const convertPrice = (price: number) => {
        return price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };
    const handlePayment = () => {
        paymentService.createPayment();
    };
    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full gap-2 p-3 sm:flex-row"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${BackGroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-[300px] md:w-[500px] shrink-0">
                <img
                    src={book.thumbnail}
                    className="object-cover w-full h-full"
                    alt="book-image"
                />
            </div>
            <div className="flex flex-col gap-2 text-white">
                <h1 className="text-[40px] font-bold">{book.title}</h1>
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                        <p className="text-[20px] font-semibold">Tác giả:</p>
                        <p className="text-[20px] font-semibold">Danh mục</p>
                        <p className="text-[20px] font-semibold">Tình trạng</p>
                        <p className="text-[20px] font-semibold">Giá</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[20px] italic">
                            {book.author?.join(", ")}
                        </p>
                        <p className="text-[20px]">{book.category}</p>
                        <p className="text-[20px] text-green-700">
                            {book.status}
                        </p>
                        <p className="text-[20px]">
                            {convertPrice(book.price)}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="px-4 py-2 text-white transition-all duration-300 bg-gray-800 rounded-md hover:bg-gray-700 active:bg-gray-900"
                        onClick={onButtonClick}
                    >
                        Xem chi tiết
                    </button>
                    <button
                        className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-400 active:bg-blue-600"
                        onClick={handlePayment}
                    >
                        Mua sách
                    </button>
                </div>
            </div>
        </div>
    );
}
