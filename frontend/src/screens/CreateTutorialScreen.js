import {useEffect, useRef, useState} from "react";
import JoditEditor from "jodit-react";
import {MDBContainer, MDBIcon} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";
import "../styles/markdownSnippetStyle.css";
import {Button, Spinner} from "react-bootstrap";
import {tutorialCreate} from "../redux/actions/tutorialActions";
import {TUTORIAL_CREATE_RESET} from "../redux/constants/tutorialConstants";
import notify from "../utils/notification";
import { useNavigate } from "react-router-dom";


export default function CreateTutorial() {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const [isRawMd] = useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [subtitle, setSubtitle] = useState('')

    const createPost = useSelector(state => state.tutorialCreate);
    const {loading, error, success } = createPost;

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    if (success) {
        navigate("/tutorials")
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
            subtitle: subtitle,
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
                    <div className="mt-3 mb-3">
                        <input onBlur={(e) => setTitle(e.target.value)} className="w-full border-1 rounded-1 flex flex-column" type="text" placeholder="Title"/>
                    </div>

                    <div className="mt-3 mb-3">
                        <input onBlur={(e) => setSubtitle(e.target.value)} className="w-full border-1 rounded-1 flex flex-column" type="text" placeholder="Subtitle"/>
                    </div>

                    {
                        isRawMd ?
                            <>
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
                        disabled = {!title || !subtitle || !content}
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
            </MDBContainer>

        </div>

    );
}
