import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default function CustomCard({word}) {

    return (
        <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody className="border rounded">
                <MDBCardTitle>{word.word}</MDBCardTitle>
                <MDBCardText>
                    {word.meaning}                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
