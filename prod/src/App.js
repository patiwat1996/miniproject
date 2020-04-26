import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Home from './components/Home'
import Linkbar from './components/Linkbar';
import Vedio from './components/Vedio';
import Linkbt from './components/Linkbt';

const App = () => {
  return (
    // <div>
    //   {/* <h2>Share Picture</h2> */}
    //   {/* <PictureList2  /><br/> */}


    //   <LoginForm /><br/>
    //    {/* <Vedio/><br/>
    //    <Link/> */}

    // </div>

    <div>
      <div>
        <Route path="/" component={Linkbar} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/picture" component={Vedio} />




      </div>
    </div>
  )


}

export default App;