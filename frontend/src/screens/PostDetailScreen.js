import "../styles/tutorialsStyle.css"
import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {retrieveTutorialAction} from "../redux/actions/tutorialActions";
import {FillSpinner, YellowSpinner} from "../components/spinner";
import {tabTitle} from "../utils/generalFunctions";

export function PostDetail({match}) {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveTutorialAction(params.slug));
    }, [dispatch, params.slug])

    const retrievePost = useSelector(state => state.retrieveTutorial)
    const {loading, post, error} = retrievePost;


    tabTitle(`Vocup | ${loading? "loading..." : post && post.title}`);

    return (

        <div className="">

            <div>
                <div
                    style={{background: "#14C07B"}}>

                    <div className=" p-10 container text-center">
                        <h1 style={{color: "white", fontSize: "40px"}}><b>{loading ? <YellowSpinner /> : post ? post.title : error.data.detail}</b></h1>
                    </div>

                </div>

                <div className="container mt-16">

                    {
                        loading ? <div className="mx-auto text-center"><YellowSpinner/></div> : post && parse(String(post.body))
                    }

                </div>
            </div>

        </div>
    )
}
