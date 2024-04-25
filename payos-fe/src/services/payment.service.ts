import axios from "axios";
const createPayment = async () => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/payment`, {
        cancelURL: `${window.location.origin}`
    });

    const checkoutUrl = response.data.checkoutUrl;
    window.location.href = checkoutUrl;

}
export const paymentService = {
    createPayment
}
