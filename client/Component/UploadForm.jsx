import React from 'react';

const UploadForm = () => { 
    return(
        <div className = 'UploadForm'>
            <form>
                <h1>File Uploader</h1>
                <input type = 'file'/>
                <button type="submit">Upload</button>
            </form>
        </div>

    );
};
export default UploadForm;