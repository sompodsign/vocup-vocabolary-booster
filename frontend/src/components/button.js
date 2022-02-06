import {Button} from "@mui/material";


const customBtn = (props) => {
    return <Button onClick={props.func} variant={props.variant}>{props.title}</Button>
}

export default customBtn;
