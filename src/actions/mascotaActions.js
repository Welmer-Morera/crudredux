import {
    AGREGAR_MASCOTA,
    AGREGAR_MASCOTA_EXITO,
    AGREGAR_MASCOTA_ERROR,
    DESCARGA_MASCOTAS,
    DESCARGA_MASCOTAS_EXITO,
    DESCARGA_MASCOTAS_ERROR
} from '../types' 
import clienteAxios from '../config/axios'

import Swal from 'sweetalert2'

export function crearNuevaMascotaAction(mascota){
    return async(dispatch)=>{
       dispatch(agregarMascota())

       try {
         await clienteAxios.post('/mascotas',mascota)
        dispatch(agregarMascotaExito(mascota))

        Swal.fire(
            'Correcto',
            'Los Datos de la mascota se agregaron Exitosamente',
            'success'
        )
       } catch (error) {
           console.log(error)
        dispatch(agregarMascotaError(true))

        Swal.fire({
            icon:'error',
            title:'hubo un error',
            text:' hubo un error, intenta mas tarde'
        })
       }
       
    }
}


const agregarMascota =()=>({
    type:AGREGAR_MASCOTA,
    payload:true
    
})

const agregarMascotaExito=mascota=>({
    type:AGREGAR_MASCOTA_EXITO,
    payload:mascota
})

const agregarMascotaError= estado=>({
    type:AGREGAR_MASCOTA_ERROR,
    payload:estado
})


export function obtnerMascotasAction (){

    return async (dispatch)=>{
        dispatch(descargarMascotas())

        try {
            const respuesta  = await clienteAxios.get('/mascotas')
            console.log(respuesta.data)
            dispatch(descargaMascotasExitosa(respuesta.data))
        } catch (error) {
            dispatch(descargaMascotasError())

            
        }
    }

}

const descargarMascotas=()=>({
    type:DESCARGA_MASCOTAS,
    payload:true
})

const descargaMascotasExitosa=mascotas=>({
    type:DESCARGA_MASCOTAS_EXITO,
    payload:mascotas
})
 const descargaMascotasError =()=>({
    type:DESCARGA_MASCOTAS_ERROR,
    Payload:true
 })