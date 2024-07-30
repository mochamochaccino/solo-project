import React, { useState, useEffect } from 'react';

const UploadForm = () => { 
    const [file, setFile] = useState(); //creates state to store the file
    
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
            formData.append('fileName', file.name); //adds the file name
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => {
                console.log('An error has occured during file submission: ' + error);
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
                <h1>File Uploader</h1>
                <input type = 'file' onChange = {fileHandler}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};
export default UploadForm;