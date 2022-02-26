import {tabTitle} from "../utils/generalFunctions";


function HomeScreen() {
    tabTitle("Home - VOCUP");


    return (
        <div>
           <img className="position-absolute right-0 top-0 -z-10 lg:block hidden" src={require('../media/home.webp')} alt="Home Page"/>
            <img className="position-absolute right-0 top-0 -z-10 h-full lg:hidden" src={require('../media/mobileHome.jpg')} alt="Home Page"/>
        </div>
        )
}

export default HomeScreen;
