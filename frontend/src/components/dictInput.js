
import { MDBInput } from 'mdb-react-ui-kit';

export default function DictInput(props) {
    return (
        <div style={{ width: '30rem' }}>
            <MDBInput
                labelRef={props.reference}
                label='English Word'
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
