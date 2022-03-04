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


    return (
        <div className="">
            <div class="" className=""
                 style={{background: "#14C07B"}}>

                <div className="-mt-4 p-10 container text-center">
                    <h1 style={{color: "white", fontSize: "40px"}}><b>{post.title}</b></h1>
                </div>

            </div>


            {/**/}
            <div className="container mt-16">
                {parse(String(post.body))}

            </div>
            {/*  */}

            {/*</MDBContainer>*/}
        </div>
    )
}
