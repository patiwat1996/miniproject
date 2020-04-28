import React from 'react';
import './InputForm.css';
import Linkbt from './Linkbt';



const Vedio = props => {


    return (

        <div className="vedio">
            
            <br />
           
            <h1>ฟังเพลงกันเถอะ</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bV3fO-kgVqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/ze5qE9Kpm-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/ep4yBpu3r70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/DueF-LrcjG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>{Date()}</div><br />
            
            <Linkbt />
        </div>

    )
}

export default Vedio;