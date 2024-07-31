import React, { useState, useEffect } from 'react';
import Row from './Row.jsx';

const Display = () => {
    const [list, setList] = useState([]);

    const fetcher = () => {
        fetch('/database', {
            method: 'GET'
        })
        .then(response => { //this then is needed since the promise is not finished yet
            return response.json();
        })
        .then(data => {
            //console.log(data.rows);
            setList(data.rows);
        })
        .catch(error => {
            console.log('An error has occured getting the database: ' + error);
        });
    }

    useEffect(() => { //useEffect is used to handle fetch requests that are not being handled by an independent handler
        fetcher();
    }, [list]);
    const storage = [];
    for(let i = 0; i < list.length; i++){
        storage[i] = <div key = {i + 3030303}><Row list = {list[i]} fetcher = {fetcher}/></div>
    }
    return(
        <div>
            <h1>Current Stored Files</h1>
            <hr></hr>
            {storage}
        </div>
    );
};

export default Display;