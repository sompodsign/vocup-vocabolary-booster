import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import "../styles/tutorialsStyle.css"
import {useEffect} from "react";
import {getAllTags, listTutorials} from "../redux/actions/tutorialActions";
import {getDaysAgo} from "../helpers/dateGeneralFunctions";
import {Button} from "react-bootstrap";
import {pluralize} from "../helpers/generalFunctions";
import {tabTitle} from "../utils/generalFunctions";
import {getUserDetails} from "../redux/actions/userActions";
import {TagList} from "../components/TagList";
import {TagContext} from "../components/tagcontext";


export default function TutorialScreen() {

    tabTitle("Tutorials - VOCUP");

    const params = useParams();

    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)
    const {user} = userDetail;

    const tutorialTags = useSelector(state => state.tutorialTags)
    const {tags} = tutorialTags;

    const tutorialsList = useSelector(state => state.tutorialList);
    let {loading, tutorials} = tutorialsList;

    const [search, setSearch] = useState("");


    useEffect(() => {
        dispatch(listTutorials(params.tag));
        dispatch(getUserDetails());
        dispatch(getAllTags());
    }, [dispatch, params.tag]);

    tutorials = tutorials.filter(tutorial => {
        return tutorial.title.toLowerCase().includes(search.toLowerCase())
    })


    return <div className="mt-3">

        <div
            style={{background: "#14C07B"}} className=" w-full -mt-4 p-10 -z-10 d-flex flex-column align-items-center">

            <h1 style={{color: "white", fontSize: "50px"}}><b>Tutorials</b></h1>
            <p style={{color: "white", fontSize: "18px", fontWeight: "400"}}>Follow along with one
                of my {tutorials.length} development and sysadmin tutorials.</p>
            <div className="container">

                <input className="w-full h-16 p-2 border-1 rounded-2" placeholder="Search Tutorials" onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>

        <div className="mt-16 container">


            {user && user.is_superuser &&
                <div className="flex justify-content-end lg:mb-0 mb-4">
                    <Link to="/create-tutorial">
                        <Button variant="outline-success">Create Post</Button>{' '}
                    </Link>
                </div>
            }


            <TagContext.Provider value={{"tags":tags, "param": params.tag}}>
                <TagList/>
            </TagContext.Provider>

            {loading && <div className="mx-auto text-center">
                <svg role="status"
                     className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
            </div>}


            {
                tutorials && tutorials.map((tutorial) => {
                    return <div key={tutorial.id}>
                        <Link to={`/tutorials/${tutorial.slug}`}>
                            {/* <a href={"post/"+tutorial.slug}> */}
                                <h1 className="post-header" style={{color: "black"}}>{tutorial.title}</h1>
                            {/* </a> */}
                        </Link>
                        <p className="short-desc">{tutorial.subtitle ? tutorial.subtitle.slice(0, 150) + "..." : "no sub yet"}</p>
                        <div className="flex">
                            <p style={{
                                fontSize: "13px",
                                fontWeight: "500",
                                lineHeight: "1.6"
                            }}>{pluralize(getDaysAgo(tutorial.created), "day")} ago</p>
                            <p style={{
                                fontSize: "13px",
                                fontWeight: "500",
                                lineHeight: "1.6"
                            }}>{Object.keys(tutorial.tags).length > 1 ?
                                tutorial.tags.map((tag, index) => {
                                    return <span key={index} className="badge badge-pill badge-success ml-2">{tag}</span>
                                }) : <span className="badge badge-pill badge-success ml-2">{tutorial.tags}</span>
                            }</p>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
}
