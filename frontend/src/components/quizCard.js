import {Card, ListGroup} from "react-bootstrap";


export const QuizCard = (props) => {
    console.log(props.props)
    return <Card style={{ width: '18rem' }}>
        <Card.Header>{props.props.question}</Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item>{props.props.correctAnswer}</ListGroup.Item>
            <ListGroup.Item>{props.props.options[0]}</ListGroup.Item>
            <ListGroup.Item>{props.props.options[1]}</ListGroup.Item>
            <ListGroup.Item>{props.props.options[2]}</ListGroup.Item>
            {/*<ListGroup.Item>asd</ListGroup.Item>*/}
            {/*<ListGroup.Item>asdf</ListGroup.Item>*/}
            {/*<ListGroup.Item>asdf</ListGroup.Item>*/}
            {/*<ListGroup.Item>adf</ListGroup.Item>*/}
        </ListGroup>
    </Card>
}
export default QuizCard;
