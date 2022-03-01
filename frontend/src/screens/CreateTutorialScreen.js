import {useRef, useState} from "react";
import JoditEditor from "jodit-react";
import {MDBContainer} from "mdb-react-ui-kit";
import {useDispatch} from "react-redux";
import "../styles/markdownSnippetStyle.css";
import {Button, Spinner} from "react-bootstrap";
import {tutorialCreate} from "../redux/actions/tutorialActions";

export default function CreateTutorial() {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const [isRawMd, setIsRawMd] = useState(true)

    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [tags, setTags] = useState(null)

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }


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

                <div class="writing-snippet">

                    <div className="flex justify-content-end">
                            <Button
                                variant={isRawMd ? "outline-success" : "outline-primary"}
                                onClick={()=> setIsRawMd(!isRawMd)}
                            >{isRawMd ? "Ready HTML" : "Raw Text"}</Button>{' '}
                    </div>

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
                        variant={true ? "success" : "primary"}
                        onClick={handleSave}
                    >
                        {false && <Spinner
                            as="span"
                            animation="grow"
                            size="lg"
                            role="status"
                            aria-hidden="true"
                        />}
                        Save
                    </Button>
                </div>


            </MDBContainer>

        </div>

    );
}
