
// import {PrimaryResBtn} from "./lightBtn";
import {MDBBtn} from "mdbreact";
import {QuizButton} from "./buttons";



const Quiz =  (props) => {
    return (
            <div>
                <h6 className="text-center">Quiz 1/120</h6>
                <div className="d-flex flex-column mb-3 border p-2 rounded-3">
                <QuizButton title="Answer 1" />
                <QuizButton title="Answer 2" />
                <QuizButton title="Answer 3" />
                <QuizButton title="Answer 4" />
                </div>
            </div>
    );
}
export default Quiz;
