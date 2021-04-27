import React from 'react'
 import {Link} from 'react-router-dom'
const Mascota = ({mascota}) => {
    const {  id,nombre, sexo,edad, peso,dueño}=mascota
    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{sexo}</td>
            <td>{edad}</td>
            <td>{peso}</td>
            <td>{dueño}</td>
            <td className="acciones text-center">
                <Link to={`/mascotas/editar/${id}`}  className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button  type ="button" className="btn btn-danger mr-2">
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Mascota;