import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";


const notify = (message, variant) => {

    // eslint-disable-next-line default-case
    switch (variant) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warning':
            toast.warning(message);
            break;
        case 'info':
            toast.info(message);
            break;
    }
}


export default notify;
