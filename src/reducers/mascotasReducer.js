
import {
    AGREGAR_MASCOTA,
    AGREGAR_MASCOTA_EXITO,
    AGREGAR_MASCOTA_ERROR,
    DESCARGA_MASCOTAS,
    DESCARGA_MASCOTAS_EXITO,
    DESCARGA_MASCOTAS_ERROR
} from '../types' 

const initialState = {
    mascotas:[],
    error:null,
    loading:false
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case DESCARGA_MASCOTAS:
        case AGREGAR_MASCOTA:
            return{
                ...state,
                loading:action.payload
            }
            case AGREGAR_MASCOTA_EXITO:
            return{
                ...state,
                loading:false,
                mascotas:[...state.mascotas,action.payload]
            }
            case DESCARGA_MASCOTAS_ERROR:
            case AGREGAR_MASCOTA_ERROR:
                return{
                    loading:false,
                    error:action.payload

                }
            case DESCARGA_MASCOTAS_EXITO:
                return{
                    ...state,
                    loading:false, 
                    error: false,
                    mascotas:action.payload
                }
                
        default:
            return state;
    }
}