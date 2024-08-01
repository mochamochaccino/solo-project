import React, { useState, useEffect } from 'react';

const Row = (props) => {
    const deleteHandler = () => {
        fetch('/database/delete?file_id=' + props.list.file_id, {
            method: 'DELETE',
        })
        .then(response => { //this then is needed since the promise is not finished yet
            //console.log(response);
            return response;
        })
        .then(data => {
            //console.log(data);
            return props.modifier.setModify(Math.floor(Math.random() * 10000) + 1);
        })
        .catch(error => {
            console.log('An error has occured getting the database: ' + error);
        });
    }
    const downloadHandler = () => {
        fetch('/database/download?file_id=' + props.list.file_id, {
            method: 'GET',
        })
        .then(response => response.blob()) //stores the file in a blob (binary large object)
        .then(blob => {
            const url = window.URL.createObjectURL( //creates a URL with the blob object
                new Blob([blob]),
              );
            const link = document.createElement('a'); //creates an anchor for the download
            link.href = url; //sets the blob's url to the anchor
            link.setAttribute( //sets download attribute and file name (file type matters)
            'download',
            props.list.file_name,
            );
            document.body.appendChild(link); //appends document to DOM
            link.click(); //"clicks" the button
            link.parentNode.removeChild(link); //cleans up the anchor
            window.URL.revokeObjectURL(url); //cleans up the URL
        })
        .catch(error => {
            console.log('An error has occured during download: ' + error);
        });
    }
    return (
        <div className = 'rows'>
            <div className = 'fileName'>File Name: {props.list.file_name}</div>
            <div className = 'uploadDate'>Upload Date: {props.list.upload_time}</div>
            <div className = 'fileType'>File Type: {props.list.file_type}</div>
            <button className = 'deleteButton' type='button' onClick = {deleteHandler}>Delete</button>
            <button className = 'downloadButton' type='button' onClick = {downloadHandler}>Download File</button>
            <hr></hr>
        </div>
        
    );
};

export default Row;