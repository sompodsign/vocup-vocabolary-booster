import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {capitalize} from "../helpers/capitalize";

const WordTable = ({words}) => {

    return (
        <MDBTable striped>
            <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Bengali</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {words.map((word, index) => {
                    return (
                        <tr key={word.id}>
                            <td>{index + 1}</td>
                            <td>{capitalize(word.word)}</td>
                            <td>{word.meaning}</td>
                        </tr>
                    );
                })}
            </MDBTableBody>
        </MDBTable>
    );
}

export default WordTable;
