import React, { useState, useEffect } from 'react';

const Row = (props) => {
    const deleteHandler = () => {

    }
    return (
        <div className = 'rows'>
            <div className = 'fileName'>File Name: {props.list.file_name}</div>
            <div className = 'uploadDate'>Upload Date: {props.list.upload_time}</div>
            <div className = 'fileType'>File Type: {props.list.file_type}</div>
            <button className = 'deleteButton'>Delete</button>
            <hr></hr>
        </div>
        
    );
};

export default Row;