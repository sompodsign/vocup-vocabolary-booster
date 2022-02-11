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
        className={parent === "quiz" && "mb-1"}
        outline
        rounded
        onClick={onClick}
    >
        {title}
    </MDBBtn>
}

export function QuizButton({title, handleNextQuiz}) {

    return <MDBBtn
        color="dark"
        className="mb-1"
        onClick = {() => handleNextQuiz(title)}
        size={'lg'}
    >
        {title}
    </MDBBtn>
}
