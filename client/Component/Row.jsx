import React, { useState, useEffect } from 'react';

const Row = (props) => {
    const deleteHandler = () => {
        props.fetcher('/database/delete?file_id=' + props.list.file_id, 'DELETE');
    }
    return (
        <div className = 'rows'>
            <div className = 'fileName'>File Name: {props.list.file_name}</div>
            <div className = 'uploadDate'>Upload Date: {props.list.upload_time}</div>
            <div className = 'fileType'>File Type: {props.list.file_type}</div>
            <button className = 'deleteButton' type='button' onClick = {deleteHandler}>Delete</button>
            <hr></hr>
        </div>
        
    );
};

export default Row;