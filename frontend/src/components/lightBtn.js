import {MDBBtn} from "mdb-react-ui-kit";

export function LightBtn({text, func, key}) {
    return <MDBBtn rounded className='text-dark m-1' color='light' key={key} onClick={() => func(text)}>{text}</MDBBtn>
}

export function PrimaryBtn({title, onClick, inputData}) {

    return <MDBBtn
        outline
        rounded
        onClick={onClick}
        disabled={!inputData && true}
    >
        {title}
    </MDBBtn>
}

export function PrimaryResBtn({title, onClick}) {

    return <MDBBtn
        outline
        rounded
        onClick={onClick}
    >
        {title}
    </MDBBtn>
}

