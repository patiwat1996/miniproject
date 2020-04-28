import React from 'react';
import './PictureCard.css';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
const PictureCard = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    const deletePicture = async () => {
        const result = await axios.delete(`https://polar-ravine-26409.herokuapp.com/api/pictures/${props.id}`)
        dispatch({type : 'DELETE_PICTURE', id: props.id})
      }
    
    const updatePicture = async () => {
    const result = await axios.put(`https://polar-ravine-26409.herokuapp.com/api/pictures/${props.id}`,form)
    dispatch({type : 'UPDATE_PICTURE', id: props.id , picture: {...form, id: props.id}})
  }
    return (
        <div className='picturecard-container'>
            <div className='picturecard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='picturecard-name'>{props.name}</p>
                <p className='picturecard-caption'>{props.caption}</p>
            </div>
            <div className='picturecard-actions'>
                <div onClick={updatePicture}>Update</div>
            
            <div className='picturecard-actions2'>
                <div onClick={deletePicture}>Delete</div>
            </div>
        </div>
        </div>

    )
}

export default PictureCard;