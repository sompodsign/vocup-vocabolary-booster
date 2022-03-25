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

    const newSavedWord = useSelector(state => state.createdWord)
    const {loading:wordCreateLoading, error:wordCreateError,fail, success:wordCreateSuccess} = newSavedWord


    const handleSetWordState = () => {
        setWordState(true, word.bn_syn.length > 0);
    }

    return (
<>
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



        </MDBCard>

    {
        userInfo &&
        <button onClick={() => handleSetWordState(true)} type="button"
                className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
            {wordCreateLoading &&
                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"/>
                </svg>}
            {wordCreateLoading ? "Saving..." : "Add Word"}
        </button>
    }
        </>

);
}
