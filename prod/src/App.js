import React, { useState, useEffect } from 'react'
import PictureList2 from './components/PictureList2'
import LoginForm from './components/LoginForm';
import Vedio from './components/Vedio';
import Link from './components/Link';
const App = () => {
  return (
    <div>
      <h2>Share Picture</h2>
      <PictureList2  /><br/>
      <LoginForm /><br/>
       <Vedio/><br/>
       <Link/>
     
    </div>
  )

         
}

export default App;