import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtnerMascotasAction} from '../actions/mascotaActions'
import Mascota from './Mascota'
const Mascotas = () => {

 const dispatch = useDispatch()
  const  mascotas = useSelector(state=>state.mascotas.mascotas)
  const error = useSelector(state=>state.mascotas.error)
  const cargando= useSelector(state=>state.mascotas.loading)
 useEffect(() => {
     const cargarMascotas=()=>dispatch(obtnerMascotasAction())
     cargarMascotas()
     //eslint-disable-next-line
 }, [])
    return ( 
        <Fragment>
            <h2 className="text-left "> Mascotas registradas</h2>
            {error?<p className="font-weight-bold alert alert-danger text-danger">Hubo un error</p>:null}
            {cargando?<p className="text-center">Cargando...</p>:null}
            <table className="table table-striped">
                <thead  className="bg-info table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Dueño</th>
                        <th  className ="text-center" scope="col">Acciones</th>
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