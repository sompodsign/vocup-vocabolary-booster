import {ImageResizeComponent} from '../components/imageResize';
import {Link, useParams} from "react-router-dom";
import {ImageCompress} from "../components/imageCompress";
import {YoutubeDownload} from "../components/youtubeDownload";
import {tabTitle} from "../utils/generalFunctions";

export const ToolsScreen = () => {

    tabTitle("Vocup | Tools")

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const params = useParams();


    function componentHandler() {
        switch (params.toolName) {
            case 'image-compressor':
                return <ImageCompress/>
                break;
            case 'youtube-downloader':
                return <YoutubeDownload/>
                break;
            default:
                return <ImageResizeComponent/>
                break;
        }
    }

    const titleCase = (str) => {
        const words = str.split('-');
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }


    return (

        <div className="h-full min-h-screen bg-slate-300 lg:position-relative">
            <div
                style={{background: "#14C07B"}}>

                <div className=" p-10 container text-center">
                    <h1 style={{color: "white", fontSize: "40px"}}><b>{titleCase(params.toolName)}</b></h1>
                </div>

            </div>
            <div className="container lg:pt-4 pt-4">


                <div className="lg:flex">

                    <aside className="lg:w-64 lg:flex" aria-label="Sidebar">

                        <ul className="lg:space-y-2 flex lg:flex-col overflow-x-auto">

                            <li>
                                <Link to="/tools/image-resize">
                                    <a href="#"
                                       className={classNames(params.toolName === "image-resize" ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span className="ml-3">Image Resizer</span>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link to="/tools/image-compressor">
                                    <a href="#"
                                       className={classNames(params.toolName === "image-compressor" ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span className="ml-3">Image Compressor</span>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link to="/tools/youtube-downloader">
                                    <a href="#"
                                       className={classNames(params.toolName === "youtube-downloader" ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        <span className="ml-3">Youtube Downloader</span>
                                    </a>
                                </Link>
                            </li>

                            {/*<li>*/}
                            {/*    <Link to="/tools/youtube-downloader">*/}
                            {/*        <a href="#"*/}
                            {/*           className={classNames(params.toolName === "" ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>*/}
                            {/*            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>*/}
                            {/*            </svg>*/}
                            {/*            <span className="ml-3">Word to PDF</span>*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/tools/youtube-downloader">*/}
                            {/*        <a href="#"*/}
                            {/*           className={classNames(params.toolName === "" ? "hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>*/}
                            {/*            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>*/}
                            {/*            </svg>*/}
                            {/*            <span className="ml-3">PDF to Word</span>*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/tools/youtube-downloader">*/}
                            {/*        <a href="#"*/}
                            {/*           className={classNames(params.toolName === "" ? "hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>*/}
                            {/*            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>*/}
                            {/*            </svg>*/}
                            {/*            <span className="ml-3">JPG to PDF</span>*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <Link to="/tools/youtube-downloader">*/}
                            {/*        <a href="#"*/}
                            {/*           className={classNames(params.toolName === "" ? " hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>*/}
                            {/*            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>*/}
                            {/*            </svg>*/}
                            {/*            <span className="ml-3">Excel to CSV</span>*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/tools/youtube-downloader">*/}
                            {/*        <a href="#"*/}
                            {/*           className={classNames(params.toolName === "" ? "hidden flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-50" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700")}>*/}
                            {/*            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>*/}
                            {/*            </svg>*/}
                            {/*            <span className="ml-3">CSV to Excel</span>*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </aside>


                    <div className="ml-10">
                        {
                            componentHandler()
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};
