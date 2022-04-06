import axios from 'axios';
import client from "../config";
import {useState} from "react";


export const ImageResizeComponent = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState("")


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const submitHandler = () => {



        const bodyFormData = new FormData(); // pass in the form

        bodyFormData.append("image", selectedFile)
        // console.log(bodyFormData)
        client.post('/image-resize/?width=200&height=100', bodyFormData, {responseType:"blob"}).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadUrl(url)
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'file.jpg'); //or any other extension
            // document.body.appendChild(link);
            // console.log(link)
            // link.click();
            // link.title = "Download"
            // setDownloadElement(link)
        })
    }

    const element = <a href={downloadUrl} download="file.jpg">Download</a>

    console.log(downloadUrl)
    return (
        <>
            <h1>Image Resizing Tool</h1>
            <form onSubmit={submitHandler}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload
                file</label>
                <input type="file" name="file" onChange={changeHandler} />

                <button type="submit">Submit</button>

            </form>

            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}


            {downloadUrl.length !== 0 && element}

        </>

    )
}
