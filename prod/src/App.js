import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PictureList from './components/PictureList'
import InputForm from './components/InputForm';

const App = () => {
  return (
    <div>
      <h2>Share Picture</h2>
      <PictureList  />
     
      <InputForm />

      <div>{Date()}</div>
      
    </div>
  )

         
}

export default App;