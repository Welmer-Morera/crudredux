import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtnerMascotasAction} from '../actions/mascotaActions'
import Mascota from './Mascota'
const Mascotas = () => {

 const dispatch = useDispatch()
  const  mascotas = useSelector(state=>state.mascotas.mascotas)
  console.log(mascotas)
 useEffect(() => {
     const cargarMascotas=()=>dispatch(obtnerMascotasAction())
     cargarMascotas()
 }, [])
    return ( 
        <Fragment>
            <h2 className="text-left "> Mascotas registradas</h2>
            <table className="table table-striped">
                <thead  className="bg-info table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Dueño</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mascotas.length===0?'No hay Mascotas registradas':(
                        mascotas.map(mascota=>(
                            <Mascota 
                            key={mascota.id}
                            mascota={mascota}
                            />
                        ))
                    )}
                </tbody>
            </table>

        </Fragment>
            
        
     );
}
 
export default Mascotas;