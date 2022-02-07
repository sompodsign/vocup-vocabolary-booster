
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

export default function ResultCard({word}) {
    return (
        <MDBCard style={{ width: '30rem' }}>
            <MDBCardBody>
                <MDBCardTitle><MDBIcon fas icon="globe-americas" /> {word.en[0].toUpperCase() + word.en.slice(1, )}</MDBCardTitle>
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
                <MDBCardTitle><MDBIcon fas icon="language" /> {word.bn}</MDBCardTitle>

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
                            <MDBIcon fas icon="align-right" /> {parse(sentence)}
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            }

            <MDBCardBody>
                <MDBCardLink href='#'>Add to learn list</MDBCardLink>
            </MDBCardBody>
        </MDBCard>
    );
}
