import React, { useState, useEffect } from 'react';

const UploadForm = (props) => { 
    const [file, setFile] = useState(); //creates state to store the file
    const [status, setStatus] = useState('');
    
    const fileHandler = (input) => { //handles when the file is selected client side (browser react)
        //console.log(input);
        setFile(input.target.files[0]); //this is asynchronous so the console.log(file) will not work
        // console.log(input.target.files[0]);
        // console.log(file);
    };
    const submitHandler = (event) => {
        event.preventDefault(); //This is needed to prevent the page from automatically reloading 
        //console.log('RUNNING');
        if(file){
            const formData = new FormData(); //form data is easily parsed by the server
            formData.append('file', file); //adds the file
            fetch('/upload/file', {
                method: 'POST',
                body: formData
            })
            .then(data => {
                if(data.ok){
                    console.log("File successfully uploaded");
                    setStatus('Successful');
                    props.modifier.setModify(Math.floor(Math.random() * 10000) + 1);
                }
                else{
                    console.log("File was not able to be uploaded successfully" + data.status);
                    setStatus('Failed');
                }
            })
            .catch(error => {
                console.log('An error has occured during file submission: ' + error);
                setStatus('Failed');
            });
        }

    }

    // useEffect(() => {
    //     if(file){ //when the file is uploaded, log the file
    //         console.log(file);
    //     }
    // });

    return(
        <div className = 'UploadForm'>
            <form onSubmit = {submitHandler}>
                <h3>File Uploader</h3>
                <input type = 'file' onChange = {fileHandler}/>
                <button type="submit">Upload</button>
            </form>
            {status === 'Successful' && (
                <p>Upload Successful</p>
            )}
            {status === 'Failed' && (
                <p>Upload Failed</p>
            )}
        </div>
    );
};
export default UploadForm;