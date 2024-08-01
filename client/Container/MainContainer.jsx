import React, { useState, useEffect } from 'react';
import UploadForm from '../Component/UploadForm.jsx';
import Display from '../Component/Display.jsx';
const MainContainer = () => {
    const [modify, setModify] = useState(0);
    const modifierObj = {
        modify: modify,
        setModify: setModify
    };
    return(
        <div className = 'MainContainer'>
            <h1>File Storage</h1>
            <UploadForm modifier = {modifierObj}/>
            <Display modifier = {modifierObj} />
        </div>
    );
};

export default MainContainer;