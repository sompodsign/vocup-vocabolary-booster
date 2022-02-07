
import {MDBBtn} from "mdb-react-ui-kit";


const customBtn = (props) => {
    return <MDBBtn disabled={!props.inputData && true} color={props.variant} onClick={props.func}>Submit</MDBBtn>
}

export default customBtn;
