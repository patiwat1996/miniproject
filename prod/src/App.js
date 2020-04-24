import React, { useState, useEffect } from 'react'
import PictureList2 from './components/PictureList2'
import LoginForm from './components/LoginForm';
const App = () => {
  return (
    <div>
      <h2>Share Picture</h2>
      <PictureList2  />
      <LoginForm />


      <div>{Date()}</div>
      
    </div>
  )

         
}

export default App;