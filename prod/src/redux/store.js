import { createStore, combineReducers } from 'redux'
import { act } from 'react-dom/test-utils';

const initialForm = {
    name: "",
    weigth: 0,
    img: ""
}
const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case "CHANGE_NAME": return { ...data, name: action.name }
        case "CHANGE_WEIGHT": return { ...data, weight: action.weight }
        case "CHANGE_IMG": return { ...data, img: action.img }
        //...data mean ==> each [name: "", weigth: 0, img: ""]
    }
    return data; //less than return itSelf
}

const pictureReducer = (pictures = [], action) => {
    switch (action.type) {
        case "GET_PICTURES": return action.pictures
        case "ADD_PICTURE": return [...pictures, action.picture];
        case "DELETE_PICTURE" : return pictures.filter( picture => +picture.id !== +action.id )
        case "UPDATE_PICTURE" : return pictures.map(picture => {
            if (+picture.id === +action.id ){
                return action.picture
            }
            else
                return picture 
        })
    }
    return pictures; //less than return itSelf
}

const rootReducer = combineReducers({
    pictures:pictureReducer,
    form:formReducer,
})
export const store = createStore(rootReducer);