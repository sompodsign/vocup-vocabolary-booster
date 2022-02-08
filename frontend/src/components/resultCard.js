import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from 'mdb-react-ui-kit';
import parse from "html-react-parser";
import {useSpeechSynthesis} from "react-speech-kit";
import {useDispatch, useSelector} from "react-redux";
import {createWord} from "../redux/actions/wordActions";


export default function ResultCard({word}) {

    const {speak} = useSpeechSynthesis();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    const handleAddWord = () => {
        dispatch(createWord({word: word.en, meaning: word.bn}));
    }

    return (

        <MDBCard style={{width: '30rem'}}>
            <MDBCardBody>
                <MDBCardTitle> <MDBIcon icon="volume-down" onClick={() => speak({text: word.en})} /> {word.en[0].toUpperCase() + word.en.slice(1,)}
                </MDBCardTitle>
                {word.pron &&
                    <MDBCardText>
                        <strong>Pronunciation:</strong> {word.pron.length > 1 ? word.pron.join(', ') :
                        word.pron}
                    </MDBCardText>
                }
                {word.en_syn.length > 0 &&
                    <MDBCardText>
                        <b>Synonyms</b>: {word.en_syn.length > 1 ? word.en_syn.join(', ') : word.en_syn}
                    </MDBCardText>
                }
                <MDBCardTitle><MDBIcon fas icon="language"/> {word.bn}</MDBCardTitle>

                {word.bn_syn.length > 0 &&
                    <MDBCardText>
                        <b>সমার্থক শব্দ</b>: {word.bn_syn.length > 1 ? word.bn_syn.join(', ') : word.bn_syn}
                    </MDBCardText>
                }
            </MDBCardBody>
            {word.sentence.length > 0 &&
                <MDBListGroup flush>
                    {word.sentence.map((sentence, index) => (
                        <MDBListGroupItem key={index}>
                            <MDBIcon fas icon="align-right"/> {parse(sentence)}
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            }
            {
                userInfo &&  <MDBCardBody>
                <MDBCardLink href='#' onClick={handleAddWord}>Add to learn list</MDBCardLink>
            </MDBCardBody>
            }

        </MDBCard>
);
}
