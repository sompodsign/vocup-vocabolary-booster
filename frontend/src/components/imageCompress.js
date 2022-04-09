import client from "../config";
import {useState} from "react";
import notify from "../utils/notification";
import {listWords} from "../redux/actions/wordActions";
import {WORD_CREATE_RESET} from "../redux/constants/wordConstants";


export const ImageCompress = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState("")
    const [qualityAmount, setQualityAmount] = useState(70)
    const [height, setHeight] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
        setDownloadUrl("")
    };

    const submitHandler = (e) => {
        setIsLoading(true)
        e.preventDefault();


        const bodyFormData = new FormData(); // pass in the form

        bodyFormData.append("image", selectedFile)

        client.post(`/image-compress/?quality=${qualityAmount}`, bodyFormData, {responseType: "blob"}).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadUrl(url)
            setIsLoading(false)
            setIsSuccess(true)
        }).catch((error) => {
            console.log(error)
            setIsLoading(false)
            setIsError(true)
            setErrorMessage(error.response.data.message)
        })
    }

    const element = <a href={downloadUrl} download="file.jpg">Download</a>

    if (isSuccess) {
        notify("Image compressed. Click on \"Download\" link" , "success" )
        setIsSuccess(false)

    } else if (isError) {
        notify(errorMessage, "error" )
        setIsError(false)
        setErrorMessage("")
    }


    return (
        <div className="flex bg-emerald-50 p-14 rounded-5 shadow-6">
            <div>

                <form onSubmit={event => submitHandler(event)}>


                    <div className="flex items-center justify-center bg-grey-lighter">
                        <label
                            className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-400">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select image</span>
                            <input type='file' className="hidden" onChange={changeHandler}/>



                        </label>


                        {/*<div className="text-right m-3">*/}
                        {/*    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 hidden"*/}
                        {/*           htmlFor="user_avatar">Width</label>*/}
                        {/*    <input className="rounded-2" placeholder="Width - (px)" type='text'*/}
                        {/*           onChange={(e) => setQualityAmount(e.target.value)}/>*/}
                        {/*    /!*<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"*!/*/}
                        {/*    /!*       htmlFor="user_avatar"></label>*!/*/}
                        {/*    /!*<input className="rounded-2" placeholder="Height - (px)" type='text'*!/*/}
                        {/*    /!*       onChange={(e) => setHeight(e.target.value)}/>*!/*/}
                        {/*</div>*/}


                    </div>

                    <div className="relative mt-10">
                        <label htmlFor="customRange3" className="form-label"><b>Compress level:</b> {qualityAmount}%</label>
                        <input
                            onChange={(e) => setQualityAmount(e.target.value)}
                            value={qualityAmount}
                            type="range"
                            disabled={!isSelected}
                            className="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                            min="10"
                            max="100"
                            step="10"
                            id="customRange3"
                        />
                    </div>


                    {isSelected &&
                        <>
                            <div className="mt-2">
                                {isSelected ? (
                                    <div>
                                        <p><b>Selected file:</b> {selectedFile.name}</p>
                                        <p><b>Size:</b> {(selectedFile.size / 1024).toFixed(2)} kb</p>
                                    </div>
                                ) : (
                                    <p>Select a file to show details</p>
                                )}
                            </div>
                            <div className="text-center m-2">
                                <button
                                    type="submit"
                                    disabled={!qualityAmount  && true}
                                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                    {isLoading &&
                                        <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin"
                                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"/>
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"/>
                                        </svg>}
                                    {isLoading ? "Compressing..." : "Compress"}

                                </button>
                            </div>
                        </>
                    }
                </form>

                {downloadUrl.length !== 0 &&
                    <div className="text-center">
                        {element}
                    </div>
                }
            </div>

        </div>

    )
}
