import React from 'react';
import UploadForm from '../Component/UploadForm.jsx';
import Display from '../Component/Display.jsx';
const MainContainer = () => {
    return(
        <div className = 'MainContainer'>
            <h1>File Storage</h1>
            <UploadForm/>
            <Display/>
        </div>
    );
};

export default MainContainer;