import {MDBContainer} from "mdb-react-ui-kit";
import "../styles/tutorialsStyle.css"


export default function TutorialScreen() {

    return <div className="position-fixed top-16 end-0 w-full p-10 -z-10" style={{background: "#14C07B", height: "288px"}}>
        <MDBContainer>
            <div className="d-flex flex-column align-items-center">
                <h1 className="pb-4" style={{color: "white", fontSize:"50px"}}><b>Tutorials</b></h1>
                <p className="pb-1" style={{color: "white", fontSize:"18px", fontWeight:"400"}}>Follow along with one of my 4,323 development and sysadmin tutorials.</p>
                <div className="w-full position-relative">
                {/*<i className="fas fa-search position-absolute left-3 top-6"/>*/}
                <input className="w-full h-16 p-2 border-1 rounded-2" placeholder="Search Tutorials"/>
                </div>

            </div>
        </MDBContainer>
    </div>
}
