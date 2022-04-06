import {ImageResizeComponent} from '../components/imageResize';
import {useState} from "react";
import {YellowSpinner} from "../components/spinner";

export const ToolsScreen = () => {

    const [isImageResize, setImageResize] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setImageResize(true)
    }


    return (

        <div className="h-full min-h-screen bg-slate-300 position-relative">
            <div
                style={{background: "#14C07B"}}>

                <div className=" p-10 container text-center">
                    <h1 style={{color: "white", fontSize: "40px"}}><b>Tools</b></h1>
                </div>

            </div>
            <div className="container pt-4">
                {/*<h1>Tools</h1>*/}

                <div className="flex">

                    <aside className="w-64" aria-label="Sidebar">
                        {/*<div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">*/}
                        <ul className="space-y-2">
                            <li>
                                <a href="#"
                                   onClick={(e) => handleClick(e)}
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="ml-3">Image Resizer</span>
                                </a>
                            </li>
                        </ul>
                        {/*</div>*/}
                    </aside>


                <div className="">
                    {isImageResize &&
                        <ImageResizeComponent/>
                    }
                </div>

                </div>
            </div>
        </div>
    );
};
