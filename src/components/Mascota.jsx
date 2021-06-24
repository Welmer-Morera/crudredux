import React from 'react'
import { useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {eliminarMascotasAction,obtenerMascotaEditar} from '../actions/mascotaActions'
import Swal from 'sweetalert2'
const Mascota = ({mascota}) => {
    const {  id,nombre, sexo,edad, peso,dueño}=mascota

    const dispatch = useDispatch()
    const history  = useHistory();

    const confirmarEliminarMascota = id =>{
        Swal.fire({
            title: '¿Estas seguro?',
            text: "!Si eliminas los datos de la mascota no se pueden recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar ',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminarMascotasAction(id))
              
            }
          })


        
    }

    const redireccionarEdicion = mascota =>{
        dispatch(obtenerMascotaEditar(mascota))
        history.push(`/mascotas/editar/${mascota.id}`)
        

    }


    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{sexo}</td>
            <td>{edad}</td>
            <td><span className="font-weight-bold">{peso} Kg</span></td>
            <td>{dueño}</td>
            <td className="acciones text-center">
                <button  type ="button"   className="btn btn-primary mr-2" onClick={()=>redireccionarEdicion(mascota)}>
                    Editar
                </button>
                <button  type ="button" className="btn btn-danger mr-2" 
                onClick={()=>confirmarEliminarMascota(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Mascota;