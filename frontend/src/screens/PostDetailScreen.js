import "../styles/tutorialsStyle.css"

import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {retrieveTutorialAction} from "../redux/actions/tutorialActions";
import {FillSpinner} from "../components/spinner";
import {tabTitle} from "../utils/generalFunctions";

export function PostDetail({match}) {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveTutorialAction(params.slug));
    }, [dispatch, params.slug])

    const retrievePost = useSelector(state => state.retrieveTutorial)
    const {loading, post} = retrievePost;

    // const customTabTitle = `vocup | ${tabTitle(post.title)}`;

    tabTitle(`vocup | ${loading? "loading..." : post.title}`);


    return (

        <div className="">

            <div>
                <div
                    style={{background: "#14C07B"}}>

                    <div className="-mt-4 p-10 container text-center">
                        <h1 style={{color: "white", fontSize: "40px"}}><b>{loading ? "loading..." : post.title}</b></h1>
                    </div>

                </div>

                <div className="container mt-16">
                    {loading && <div className="mx-auto text-center"><FillSpinner/></div>}
                    {!loading && parse(String(post.body))}

                </div>
            </div>

        </div>
    )
}
