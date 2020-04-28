import React from 'react';
import './PictureCard.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
const PictureCard2 = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    return (
        <div className='picturecard-container'>
            <div className='picturecard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='picturecard-name'>{props.name}</p>
                <p className='picturecard-caption'>{props.caption}</p>
            </div>

        </div>

    )
}

export default PictureCard2;