import {combineReducers} from 'redux'
import mascotasReducer from './mascotasReducer'
import alertaReducer from './alertaReducer'

export default combineReducers({
    mascotas:mascotasReducer,
    alerta :alertaReducer
})