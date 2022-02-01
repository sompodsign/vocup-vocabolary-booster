import {Alert} from "react-bootstrap";

const CustomAlert = ({message, variant}) => {
    return <Alert variant={variant}>
        {message}
    </Alert>

}
export default CustomAlert;
