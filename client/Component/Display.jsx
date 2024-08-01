import React, { useState, useEffect } from 'react';
import Row from './Row.jsx';

const Display = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/database/get', {
            method: 'GET',
        })
        .then(response => { //this then is needed since the promise is not finished yet
            //console.log(response);
            return response.json();
        })
        .then(data => {
            //console.log(data);
            setList(data);
        })
        .catch(error => {
            console.log('An error has occured getting the database: ' + error);
        });
    }, [props.modifier.modify]);

    const storage = [];
    for(let i = 0; i < list.length; i++){
        //console.log(list);
        storage[i] = <div key = {i + 3030303}><Row list = {list[i]} index = {i} modifier = {props.modifier} /></div>
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