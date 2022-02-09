import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const WordTable = ({words}) => {
    console.log(words);
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
                            <td>{word.word}</td>
                            <td>{word.meaning}</td>
                        </tr>
                    );
                })}
            </MDBTableBody>
        </MDBTable>
    );
}

export default WordTable;
