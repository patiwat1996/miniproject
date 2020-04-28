import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Linkbt from './Linkbt';

const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch({})
    const pictures = useSelector(state => state.pictures)
    const form = useSelector(state => state.form)

    const addPicture = async () => {
        const result = await axios.post(`https://polar-ravine-26409.herokuapp.com/api/pictures`, form)
        dispatch({
            type: "ADD_PICTURE",
            picture: { ...form, id: pictures.length > 0 ? pictures[pictures.length - 1].id + 1 : 0 }
        })
    }

    return (
        <div className='text-left'>
            <br />
            <h2>Add Picture</h2>
            <br />

            <table >
                <tbody>
                    <tr>
                        <td>Caption</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_CAPTION", caption: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_IMG", img: e.target.value })} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <br />
                            <button className='button' onClick={addPicture}>CREATE</button>
                            <br />
                            <br />
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Linkbt />
        </div>
    )
}

export default InputForm