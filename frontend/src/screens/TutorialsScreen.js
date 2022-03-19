import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import "../styles/tutorialsStyle.css"
import {useEffect} from "react";
import {listTutorials} from "../redux/actions/tutorialActions";
import {getDaysAgo} from "../helpers/dateGeneralFunctions";
import {Button} from "react-bootstrap";
import {pluralize} from "../helpers/generalFunctions";
import {tabTitle} from "../utils/generalFunctions";
import {getUserDetails} from "../redux/actions/userActions";


export default function TutorialScreen() {

    tabTitle("Tutorials - VOCUP");


    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)
    const {user} = userDetail;


    const tutorialsList = useSelector(state => state.tutorialList);
    const {loading, tutorials, error} = tutorialsList;

    useEffect(() => {
        dispatch(listTutorials());
        dispatch(getUserDetails())
    }, [dispatch])


    return <div>

        <div
            style={{background: "#14C07B"}} className=" w-full -mt-4 p-10 -z-10 d-flex flex-column align-items-center">

            <h1 style={{color: "white", fontSize: "50px"}}><b>Tutorials</b></h1>
            <p style={{color: "white", fontSize: "18px", fontWeight: "400"}}>Follow along with one
                of my {tutorials.length} development and sysadmin tutorials.</p>
            <div className="container">
                {/*<i className="fas fa-search position-absolute left-3 top-6"/>*/}
                <input className="w-full h-16 p-2 border-1 rounded-2" placeholder="Search Tutorials"/>
            </div>
        </div>

        <div className="mt-16 container">
            {loading && <div>Loading...</div>}

            { user.is_superuser &&
                <div className="flex justify-content-end lg:mb-0 mb-4">
                    <Link to="/create-tutorial">
                        <Button variant="outline-success">Create Post</Button>{' '}
                    </Link>
                </div>
            }


            {
                tutorials && tutorials.map((tutorial) => {
                    return <div className="" key={tutorial.id}>
                        <Link to={tutorial.slug}>
                            <a href="#">
                                <h1 class="post-header" style={{color: "black"}}>{tutorial.title}</h1>
                            </a>
                        </Link>
                        <p class="short-desc">{tutorial.body.replace(/<[^>]*>?/gm, '').slice(0, 150) + "..."}</p>
                        <div class="" className="flex">
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
                                tutorial.tags.map((tag) => {
                                    return <span className="badge badge-pill badge-success ml-2">{tag}</span>
                                }) : <span className="badge badge-pill badge-success ml-2">{tutorial.tags}</span>
                            }</p>
                        </div>
                    </div>
                })
            }

        </div>

        {/*</MDBContainer>*/}
    </div>
}
