import React, { useState, useEffect } from 'react';

const Display = () => {
    const [list, setList] = useState();
    useEffect(() => { //useEffect is used to handle fetch requests that are not being handled by an independent handler
        fetch('/database', {
            method: 'GET'
        })
        .then(response => { //this then is needed since the promise is not finished yet
            return response.json();
        })
        .then(data => {
            console.log(data.rows);
            setList(data.rows);
        })
        .catch(error => {
            console.log('An error has occured getting the database: ' + error);
        });
    }, []);
    return(
        <div></div>
    );
};

export default Display;