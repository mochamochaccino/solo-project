import React from 'react';
import MainContainer from './Container/MainContainer.jsx';
import Login from './Container/Login.jsx';
import { Routes, Route } from "react-router-dom"
const App = () => {
    return(
      <div className = 'App'>
        {/* <Routes>
        <Route path='/' element = { <Login/> } />
        <Route path='/upload' element = {<MainContainer/>}/>
      </Routes> */}
      <MainContainer/>
      </div>
    );
};

export default App;