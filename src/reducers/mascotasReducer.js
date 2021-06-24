
import {
    AGREGAR_MASCOTA,
    AGREGAR_MASCOTA_EXITO,
    AGREGAR_MASCOTA_ERROR,
    DESCARGA_MASCOTAS,
    DESCARGA_MASCOTAS_EXITO,
    DESCARGA_MASCOTAS_ERROR,
    ELIMINAR_MASCOTA,
    ELIMINAR_MASCOTA_EXITO,
    ELIMINAR_MASCOTA_ERROR,
    OBTENER_MASCOTA_EDITAR,
    EDITAR_MASCOTA_EXITO,
    EDITAR_MASCOTA_ERROR

} from '../types' 

const initialState = {
    mascotas:[],
    error:null,
    loading:false, 
    mascotaEliminado:null,
    mascotaeditar:null
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
            case ELIMINAR_MASCOTA_ERROR:
             case   EDITAR_MASCOTA_ERROR:
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
            case ELIMINAR_MASCOTA:
                return{
                    ...state,
                    mascotaEliminado:action.payload
                }
            case ELIMINAR_MASCOTA_EXITO:
                return{
                    ...state,
                    mascotas:state.mascotas.filter(mascota=>mascota.id!==state.mascotaEliminado),
                    mascotaEliminado:null
                }
            case OBTENER_MASCOTA_EDITAR:
                return{
                    ...state,
                    mascotaeditar:action.payload
                } 
            case EDITAR_MASCOTA_EXITO:
                return{
                ...state,
                mascotaeditar:null,
                mascotas:state.mascotas.map(mascota=>
                    mascota.id=== action.payload.id ? mascota= action.payload: mascota
                )

            }   
        default:
            return state;
    }
}