import {MDBBtn} from "mdb-react-ui-kit";

export function Buttons({text, func, key}) {
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

export function PrimaryResBtn({title, onClick, parent}) {

    return <MDBBtn
        className={parent === "quiz" && "mb-2"}
        outline
        rounded
        onClick={onClick}
    >
        {title}
    </MDBBtn>
}


export function TakeAQuizBtn({title, onClick}) {

    return <MDBBtn
        className="mb-lg-0 mb-sm-3 mb-md-0"
        outline
        rounded
        onClick={onClick}
    >
        {title}
    </MDBBtn>
}



export function SaveButton({title, onClick}) {

    return <MDBBtn
        className="mb-lg-0 mb-sm-3 mb-md-0 w-full"
        outline
        rounded
        onClick={onClick}
    >
        {title}
    </MDBBtn>
}

export function QuizButton({id, title, handleQuizIndex}) {

    return <MDBBtn
        outline
        color="dark"
        className="mb-1 lg:w-96 md:w-full w-full mx-2"
        onClick = {() => handleQuizIndex(id, title)}
        size='lg'
    >
        {title}
    </MDBBtn>
}
