import React, { useState, useEffect } from 'react';

const UploadForm = () => { 
    const [file, setFile] = useState(); //creates state to store the file
    
    const fileHandler = (input) => { //handles when the file is selected client side (browser react)
        //console.log(input);
        setFile(input.target.files[0]); //this is asynchronous so the console.log(file) will not work
        // console.log(input.target.files[0]);
        // console.log(file);
    };

    useEffect(() => {
        if(file){ //when the file is uploaded, log the file
            console.log(file);
        }
    });

    return(
        <div className = 'UploadForm'>
            <form>
                <h1>File Uploader</h1>
                <input type = 'file' onChange = {fileHandler}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};
export default UploadForm;