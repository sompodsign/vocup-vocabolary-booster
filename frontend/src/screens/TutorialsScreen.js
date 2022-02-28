import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import {MDBContainer} from "mdb-react-ui-kit";
import "../styles/tutorialsStyle.css"
import {useEffect} from "react";
import {listTutorials} from "../redux/actions/tutorialActions";
import {getDaysAgo} from "../helpers/dateGeneralFunctions";


export default function TutorialScreen() {


    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const tutorialsList = useSelector(state => state.tutorialList);
    const { loading, tutorials, error } = tutorialsList;

    useEffect(() => {
        dispatch(listTutorials());
    }, [dispatch])


    console.log(tutorials)

    return <div className="position-absolute top-16 end-0 w-full p-10 -z-10" style={{background: "#14C07B", height: "288px"}}>
        <MDBContainer>
            <div className="d-flex flex-column align-items-center">
                <h1 className="pb-4" style={{color: "white", fontSize:"50px"}}><b>Tutorials</b></h1>
                <p className="pb-1" style={{color: "white", fontSize:"18px", fontWeight:"400"}}>Follow along with one of my 4,323 development and sysadmin tutorials.</p>
                <div className="w-full position-relative">
                {/*<i className="fas fa-search position-absolute left-3 top-6"/>*/}
                <input className="w-full h-16 p-2 border-1 rounded-2" placeholder="Search Tutorials"/>
                </div>
            </div>

            <div className="mt-20">
                {loading && <div>Loading...</div>}

                {
                    tutorials && tutorials.map((tutorial) => {
                        return <div className="m-3">
                            <Link to="/post-detail">
                            <a href="#">
                            <h1 class="post-header">{tutorial.title}</h1>
                            </a>
                        </Link>
                            <p class="short-desc">{tutorial.body.replace(/<[^>]*>?/gm, '').slice(0, 150)+"..."}</p>
                            <div class="bottom-container" className="flex">
                                <p style={{fontSize:"13px", fontWeight:"500", lineHeight:"1.6"}}>{getDaysAgo(tutorial.created)} days ago</p>
                                <p style={{fontSize:"13px", fontWeight:"500", lineHeight:"1.6"}}>{Object.keys(tutorial.tags).length > 1 ?
                                    tutorial.tags.map((tag) => {
                                        return <span className="badge badge-pill badge-success ml-2">{tag}</span>
                                    }) : <span className="badge badge-pill badge-success ml-2">tutorial.tags</span>
                                }</p>
                            </div>
                        </div>
                    })
                }

            </div>

        </MDBContainer>
    </div>
}
