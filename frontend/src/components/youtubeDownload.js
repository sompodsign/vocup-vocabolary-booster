
import client from "../config";
import {useState} from "react";


export const YoutubeDownload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState("")
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
        setDownloadUrl("")
    };

    const submitHandler = () => {


        const bodyFormData = new FormData(); // pass in the form

        bodyFormData.append("image", selectedFile)

        client.post(`/image-resize/?width=${width}&height=${height}`, bodyFormData, {responseType: "blob"}).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadUrl(url)
        }).catch((error) => {
            console.log(error)
        })
    }

    const element = <a href={downloadUrl} download="file.jpg">Download</a>

    return (
        <div className="flex">
            {/*<div>*/}

            {/*    <form onSubmit={submitHandler}>*/}


            {/*        <div className="flex items-center justify-center bg-grey-lighter">*/}
            {/*            <label*/}
            {/*                className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-400">*/}
            {/*                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                     viewBox="0 0 20 20">*/}
            {/*                    <path*/}
            {/*                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>*/}
            {/*                </svg>*/}
            {/*                <span className="mt-2 text-base leading-normal">Select a file</span>*/}
            {/*                <input type='file' className="hidden" onChange={changeHandler} />*/}
            {/*            </label>*/}


            {/*            <div className="text-right m-3">*/}
            {/*            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 hidden"*/}
            {/*                   htmlFor="user_avatar">Width</label>*/}
            {/*            <input className="rounded-2" placeholder="Width - (px)" type='text'  onChange={(e)=>setWidth(e.target.value)}/>*/}
            {/*            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"*/}
            {/*                   htmlFor="user_avatar"></label>*/}
            {/*            <input className="rounded-2" placeholder="Height - (px)"  type='text'  onChange={(e)=>setHeight(e.target.value)} />*/}
            {/*            </div>*/}


            {/*        </div>*/}


            {/*        {isSelected &&*/}
            {/*        <div className="text-center m-2">*/}
            {/*            <button*/}
            {/*                    type="submit"*/}
            {/*                    disabled={(!width.length || !height.length) && true}*/}
            {/*                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">*/}
            {/*                /!*{wordCreateLoading &&*!/*/}
            {/*                /!*    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin"*!/*/}
            {/*                /!*         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">*!/*/}
            {/*                /!*        <path*!/*/}
            {/*                /!*            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"*!/*/}
            {/*                /!*            fill="#E5E7EB"/>*!/*/}
            {/*                /!*        <path*!/*/}
            {/*                /!*            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"*!/*/}
            {/*                /!*            fill="currentColor"/>*!/*/}
            {/*                /!*    </svg>}*!/*/}
            {/*                /!*{wordCreateLoading ? "Saving..." : "Save"}*!/*/}
            {/*                Resize*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        }*/}
            {/*    </form>*/}

            {/*    {downloadUrl.length !== 0 &&*/}
            {/*        <div className="text-center">*/}
            {/*            {element}*/}
            {/*        </div>*/}
            {/*            }*/}
            {/*</div>*/}
            {/*<div className="ml-40">*/}
            {/*    {isSelected ? (*/}
            {/*        <div>*/}
            {/*            <p>Filename: {selectedFile.name}</p>*/}
            {/*            <p>Filetype: {selectedFile.type}</p>*/}
            {/*            <p>Size in bytes: {selectedFile.size}</p>*/}
            {/*            <p>*/}
            {/*                Last modified:{' '}*/}
            {/*                {selectedFile.lastModifiedDate.toLocaleDateString()}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <p>Select a file to show details</p>*/}
            {/*    )}*/}
            {/*</div>*/}
            <h1>Coming Soon</h1>

        </div>

    )
}
