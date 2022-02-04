import {Card, ListGroup} from "react-bootstrap";

// const Item = (props) => {
//     return props.map((item) => {
//         return <ListGroup.Item>{props.props.options[0]}</ListGroup.Item>
//     })
// }

export const QuizCard = (props) => {
    return <Card style={{ width: '18rem' }}>
        <Card.Header>{props.props.question}</Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item>{props.props.correctAnswer}</ListGroup.Item>
            {props.props.options.map((option, index) => {
               return <ListGroup.Item key={index}>{option}</ListGroup.Item>
            })}
            {/*<Item props={props.props.options} />*/}
        </ListGroup>
    </Card>
}
export default QuizCard;
