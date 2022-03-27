import React, { useState } from 'react';
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import {Link} from "react-router-dom";

export default function Modal({isScore, toggleIsScore, answeredAnswers}) {
    const [centredModal, setCentredModal] = useState(isScore);

    const toggleShow = () => toggleIsScore();

    const totalAnswered = answeredAnswers.length;
    const totalCorrect = answeredAnswers.filter(answer => answer.isCorrect).length;
    const total_incorrect = answeredAnswers.filter(answer => !answer.isCorrect).length;
    const incorrectAnswers = answeredAnswers.filter(answer => !answer.isCorrect);

    return (
        <>
            {/*<MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>*/}

            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Score ({totalCorrect}/{totalAnswered})</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {totalCorrect === totalAnswered ?
                                <>
                                    <p>You got all the questions correct!</p>
                                </>
                                :
                                <>
                                    <p>You got {totalCorrect} out of {totalAnswered} answers were correct!</p>
                                    <MDBTable striped>
                                        <MDBTableHead>
                                            <tr>
                                                <th>Word</th>
                                                <th>You Answered</th>
                                                <th>Correct Answer</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {incorrectAnswers.map((word) => {
                                                return (
                                                    <tr key={word.id}>
                                                        <td>{word.question}</td>
                                                        <td>{word.answer}</td>
                                                        <td>{word.correctAnswer}</td>
                                                    </tr>
                                                );
                                            })}
                                        </MDBTableBody>
                                    </MDBTable>
                                </>
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Link to="/vocabulary">
                            <MDBBtn color="warning">
                                Close
                            </MDBBtn>
                            </Link>
                            <MDBBtn onClick={toggleShow}>
                                Try Again
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
