import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editarMascotaAction} from '../actions/mascotaActions'

const EditarMascota = ({history}) => {

    const [mascota, setMascota] = useState({
        nombre:'',
        sexo:'',
        edad:'',
        peso:'',
        dueño:''
    })

    
    
    const dispatch = useDispatch()

    const mascotaE  = useSelector(state=>state.mascotas.mascotaeditar)

    useEffect(() => {
        setMascota(mascotaE)
    }, [mascotaE])


    const onChangeMascota=e=>{
        
        setMascota({...mascota,
            [e.target.name]:e.target.value
            })
    }
   
    const {  nombre, sexo,edad, peso,dueño}=mascota

    


    

    const submitEditarMascota =e=>{
        e.preventDefault()

        dispatch(editarMascotaAction(mascota))
        history.push("/")
    }
    return ( 
        <div className="row justify-content-center">
        <div  className="col-md-10">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-left mb-4 font-weight-bold">
                    Editar Mascota
                    </h2>
                    <form
                    
                    onSubmit={submitEditarMascota}
                    >
                        <div className="form-group">
                            <label>Nombre </label>
                            <input  type="text"className="form-control" placeholder="Nombre de la mascota" name="nombre" value={nombre}
                            
                            onChange={onChangeMascota}/>
                        </div>
                        <div className="form-group">
                            <label>Sexo </label>
                            <select  name="sexo" class="form-control " value ={sexo} onChange={onChangeMascota}>
                                
                                <option  value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Edad </label>
                            <input  type="number"className="form-control" placeholder="Edad de de la mascota" name="edad"
                            value ={edad}
                            onChange={onChangeMascota}
                            />
                        </div>
                        <div className="form-group">
                            <label>Peso </label>
                            <input  type="number"className="form-control" placeholder="Peso de la mascota" name="precio"
                            value ={peso}
                            onChange={onChangeMascota}
                            />
                        </div>
                        <div className="form-group">
                            <label>Dueño </label>
                            <input  type="text" className="form-control" placeholder="Dueño de la mascota" name="dueño"
                            value ={dueño}
                            onChange={onChangeMascota}
                            />
                        </div>
                        <div className="row text-center">
                        <button Type="submit" className="btn btn-primary   mr-1"> Guardar Cambios</button>
                        <button  className="btn btn-secondary " onClick={()=>{history.push("/")}}>Cancelar</button>
                   

                        </div>
                         </form>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default EditarMascota;