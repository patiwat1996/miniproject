import React, { useEffect } from 'react';
import PictureCard2 from './PictureCard2.js';
import './PictureList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Linkbt from './Linkbt.js';


const Home = props => {
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

        <div>
            <div className='picturelist-container'>

                {
                    pictures.map((picture, index) => (

                        <div key={index} style={{ margin: 40 }}>


                            <PictureCard2  {...picture} updatePicture={() => props.updatePicture(picture.id)} deletePicture={() => props.deletePicture(picture.id)} />
                        </div>
                    ))
                }

            </div>
            <Linkbt />
        </div>
    )
}

export default Home;