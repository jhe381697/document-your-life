
import { toast } from 'react-toastify';
/**
 * 
 * @param { type the desired notification message exemple: "hello world" } message 
 * @param { type the desire status if the notification exemple: "info" } status 
 * 
 * status: "info", "success", "warning", "error", "default"
 */
export default function Notify(message, status) {
    if (status === "info") {
        toast.info(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (status === "success") {
        toast.success(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (status === "warning") {
        toast.warning(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (status === "error") {
        toast.error(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (status === "default") {
        toast.default(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

}