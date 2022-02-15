
import { MDBInput } from 'mdb-react-ui-kit';

export default function Input(props) {
    return (
        <div class="max-w-full">
            <MDBInput
                className="mt-lg-2"
                labelRef={props.reference}
                label={props.label}
                id='formControlLg'
                type='text'
                size='lg'
                value={props.inputValue}
                onChange={event => props.func(event.target.value)}
                onKeyDown={event => event.key === "Enter" && props.value && props.search()}
            />
            <br />
        </div>
    );
}
