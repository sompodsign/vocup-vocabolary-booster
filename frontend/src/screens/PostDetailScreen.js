import {MDBContainer} from "mdb-react-ui-kit";
import "../styles/tutorialsStyle.css"

import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {retrieveTutorialAction} from "../redux/actions/tutorialActions";

export function PostDetail({match}) {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveTutorialAction(params.slug));
    }, [dispatch, params.slug])

    const retrievePost = useSelector(state => state.retrieveTutorial)
    const {loading, post, error} = retrievePost;
    console.log(post)


    return (
        <div>
        <div className="position-absolute top-16 end-0 w-full p-10 -z-10"
             style={{background: "#14C07B"}}>
            <MDBContainer>
                <div className="d-flex flex-column align-items-center">
                    <h1 style={{color: "white", fontSize: "40px"}}><b>{post.title}</b></h1>
                </div>
            </MDBContainer>
        </div>


                        {/**/}
<div className="mt-52 lg:mt-44">
            {parse(String(post.body))}

</div>
            {/*  */}

            {/*</MDBContainer>*/}
        </div>
    )
}
