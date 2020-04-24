import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch({})
    const pictures = useSelector(state => state.pictures)
    const form = useSelector(state => state.form)

    const addPicture = async () => {
        const result = await axios.post(`http://localhost/api/pictures/`, form)
        dispatch({ 
            type: "ADD_PICTURE", 
            picture: {...form,id:pictures.length > 0 ? pictures[pictures.length - 1].id+1 : 0} 
        })
    }

    return (
        <div className='form-container'>
            <h2>Add Picture</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: "CHANGE_WEIGHT", weight: e.target.value })} />
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
                            <button className='btn' onClick={addPicture}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm