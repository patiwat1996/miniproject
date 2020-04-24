import React, { useEffect } from 'react';
import PictureCard from './PictureCard';
import './PictureList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
const PictureList = props => {
    const pictures = useSelector(state => state.pictures);
    const dispatch = useDispatch();

    const getPictures = async () => {
        const result = await axios.get(`http://localhost/api/pictures`)
        const action = { type: 'GET_PICTURES', pictures: result.data }
        dispatch(action)
    }

    useEffect(() => {
        getPictures()
    }, [])

    if (!pictures || !pictures.length)
        return (<h2>No pictures</h2>)

    return (
        <div className='picturelist-container'>
            {
                pictures.map((picture, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <PictureCard  {...picture} updatePicture={() => props.updatePicture(picture.id)} deletePicture={() => props.deletePicture(picture.id)} />
                    </div>
                ))
            }
        </div>

    )
}

export default PictureList;