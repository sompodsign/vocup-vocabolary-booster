import {useEffect, useRef, useState} from "react";
import JoditEditor from "jodit-react";
import {MDBContainer, MDBIcon} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";
import "../styles/markdownSnippetStyle.css";
import {Button, Spinner} from "react-bootstrap";
import {tutorialCreate} from "../redux/actions/tutorialActions";
import {TUTORIAL_CREATE_RESET} from "../redux/constants/tutorialConstants";
import notify from "../utils/notification";
import {listWords} from "../redux/actions/wordActions";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";

export default function CreateTutorial() {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const [isRawMd, setIsRawMd] = useState(true)

    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')

    const createPost = useSelector(state => state.tutorialCreate);
    const {loading, tutorial, error, success } = createPost;

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    useEffect(() => {
        dispatch({type: TUTORIAL_CREATE_RESET})
    }, [dispatch])


    const handleTags = (value) => {
        //separate string by comma
        const tags = value.split(/\s*,\s*/);
        setTags(tags)
    }

    const handleSave = () => {
        let newTutorial = {
            title: title,
            body: content,
            tags: tags,
        }
        dispatch(tutorialCreate(newTutorial));
    }

    setTimeout(() => {
        if (success) {
            dispatch({type: TUTORIAL_CREATE_RESET});
        }
    }, 300000)


    if (success) {
        notify("Article created successfully", "success" )
        dispatch({type: TUTORIAL_CREATE_RESET})
    } else if (error) {
        notify("Something went wrong!", "error" )
        dispatch({type: TUTORIAL_CREATE_RESET})
    }


    return (

        <div>

            <div className="position-absolute top-16 end-0 w-full p-10 -z-10"
                 style={{background: "#14C07B", height: "150px"}}>
                <MDBContainer>
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="pb-4" style={{color: "white", fontSize: "50px"}}><b>Create Tutorial</b></h1>
                        <div className="w-full position-relative">
                        </div>
                    </div>
                </MDBContainer>
            </div>

            <MDBContainer>

                <div className="writing-snippet">

                    {/* <div className="flex justify-content-end">
                            <Button
                                variant={isRawMd ? "outline-success" : "outline-primary"}
                                onClick={()=> setIsRawMd(!isRawMd)}
                            >{isRawMd ? "Ready HTML" : "Raw Text"}</Button>{' '}
                    </div> */}

                    <div className="mt-3 mb-3">
                        <label>Title</label>
                        <input onBlur={(e) => setTitle(e.target.value)} className="w-full border-1 rounded-1 flex flex-column" type="text" placeholder="Title"/>
                    </div>

                    {
                        isRawMd ?
                            <>
                            <label>Body</label>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => {
                                }}
                            />
                            </>
                        :
                        <div>
                        <label>Body - HTML input</label>
                        <textarea
                            placeholder="Start Writing or just paste your stolen code"
                            onChange={(e) => setContent(e.target.value)}
                            rows="5"
                            className="w-full h-1/2 rounded-1"/>
                        </div>

                    }


                    <div className="mt-3 mb-3">
                        <label>Tags</label>
                        <input
                            className="w-full border-1 rounded-1 flex flex-column"
                            type="text"
                            placeholder="Tags (comma seperated)"
                            onBlur={(e) => handleTags(e.target.value)}
                        />
                    </div>

                </div>

                <div>
                    <Button
                        size="lg"
                        variant={success ? "success" : error ? "danger" : "primary"}
                        onClick={handleSave}
                    >
                        {loading ? <Spinner
                            className="mr-2"
                            size="sm"
                            as="span"
                            animation="grow"
                            role="status"
                            aria-hidden="true"
                        /> : success ? <MDBIcon className="mr-2" icon="check" />: null}
                        {
                            loading ? "Saving" : error ? "Error" : success ? "Success" : "Save"
                        }
                    </Button>
                </div>


                {/*<div>*/}

                {/*    <button onClick={handleSave}*/}
                {/*            type="button"*/}
                {/*            disabled={(!title.length || !content.length || !tags.length) && true}*/}
                {/*            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">*/}
                {/*        {loading &&*/}
                {/*            <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin"*/}
                {/*                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path*/}
                {/*                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"*/}
                {/*                    fill="#E5E7EB"/>*/}
                {/*                <path*/}
                {/*                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"*/}
                {/*                    fill="currentColor"/>*/}
                {/*            </svg>}*/}
                {/*        {loading ? "Saving..." : "Save"}*/}
                {/*    </button>*/}

                {/*</div>*/}


            </MDBContainer>

        </div>

    );
}
