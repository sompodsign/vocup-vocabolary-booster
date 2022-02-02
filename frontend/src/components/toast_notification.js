
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast = ({message, variant}) => {

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
    return <div>
        <ToastContainer/>
    </div>
}


export default Toast;
