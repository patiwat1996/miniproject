import React from 'react';
import './InputForm.css';



const Vedio = props => {


    return (
        <div className="vedio">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/bV3fO-kgVqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>{Date()}</div><br/>
        </div>

    )
}

export default Vedio;