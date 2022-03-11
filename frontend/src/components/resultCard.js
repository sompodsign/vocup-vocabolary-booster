import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from 'mdb-react-ui-kit';

import parse from "html-react-parser";
import {useSpeechSynthesis} from "react-speech-kit";
import {useSelector} from "react-redux";

import {PrimaryResBtn} from "./buttons";


export default function ResultCard({word={}, setWordState}) {


    const {speak} = useSpeechSynthesis();

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin




    const handleSetWordState = () => {
        setWordState(true, word.bn_syn.length > 0);
    }

    return (

        <MDBCard className='mt-4 border'>
            <MDBCardBody>
                <MDBCardTitle> <MDBIcon icon="volume-down" onClick={() => speak({text: word.en})} /> {word.en[0].toUpperCase() + word.en.slice(1,)}
                </MDBCardTitle>
                {word.pron.length > 0 &&
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
                    <PrimaryResBtn
                        key="result"
                        onClick={() => handleSetWordState(true)}
                        outline
                        rounded
                        title="Add to your vocabulary"
                    />
            </MDBCardBody>
            }
        </MDBCard>
);
}
