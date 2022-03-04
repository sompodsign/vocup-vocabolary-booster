import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {capitalize} from "../helpers/capitalize";

const WordTable = ({words}) => {

    return (
        <div>
            {words ?

                <MDBTable striped>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>English</th>
                            <th>Bengali</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {words ? words.map((word, index) => {
                            return (
                                <tr key={word.id}>
                                    <td>{index + 1}</td>
                                    <td>{capitalize(word.word)}</td>
                                    <td>{word.meaning}</td>
                                </tr>
                            );
                        }) : <h4>You've not added any words yet.</h4>}
                    </MDBTableBody>
                </MDBTable>

                :

                <h3>You have not added any words yet. Start adding</h3>
            }
        </div>

    );
}

export default WordTable;
