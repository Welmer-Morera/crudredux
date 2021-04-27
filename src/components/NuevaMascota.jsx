import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {crearNuevaMascotaAction} from '../actions/mascotaActions'
const NuevaMascota = ({history}) => {

    
    const [mascota, setMascota] = useState({
        nombre:'',
        sexo:'',
        edad:'',
        peso:'',
        dueño:''
    })

    const { nombre, sexo,edad, peso,dueño}=mascota
    
    const dispatch = useDispatch()

    const cargando =useSelector(state=>state.mascotas.loading)
    const error = useSelector(state=>state.mascotas.error)


    const agregarMascota  =(mascota)=> dispatch(crearNuevaMascotaAction(mascota))

    const onChangeMascota=e=>{
        
        setMascota({...mascota,
            [e.target.name]:e.target.value
            })
    }

    const submitNuevaMascota= e =>{
        e.preventDefault()

        if(nombre.trim()===''||sexo.trim()===''||sexo.trim()==='seleccione'||edad.trim()===''||peso.trim()===''||dueño.trim()===''){
                return
        } 

        agregarMascota(mascota)

        history.push("/")


    }
    return ( 
        <div className="row justify-content-center">
            <div  className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-left mb-4 font-weight-bold">
                        Nueva Mascota
                        </h2>
                        <form
                        
                            onSubmit={submitNuevaMascota}
                        >
                            <div className="form-group">
                                <label>Nombre </label>
                                <input  type="text"className="form-control" placeholder="Nombre de la mascota" 
                                name="nombre"  value={nombre} onChange={onChangeMascota}
                                />
                            </div>
                            <div className="form-group">
                                <label>Sexo </label>
                                <select  name="sexo" class="form-control " value={sexo} onChange={onChangeMascota}>
                                    <option  value="selecione">---Selecione----</option>
                                    <option  value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Edad </label>
                                <input  type="number"className="form-control" placeholder="Edad de de la mascota" name="edad" value={edad} onChange={onChangeMascota}
                                />
                            </div>
                            <div className="form-group">
                                <label>Peso </label>
                                <input  type="number"className="form-control" placeholder="Peso de la mascota" name="peso" value={peso} onChange={onChangeMascota}
                                />
                            </div>
                            <div className="form-group">
                                <label>Dueño </label>
                                <input  type="text" className="form-control" placeholder="Dueño de la mascota" name="dueño"value={dueño} onChange={onChangeMascota}
                                />
                            </div>
                            <button Type="submit" className="btn btn-primary  d-block w-100"> Agregar</button>
                        </form>

                        {cargando?<p>Cargando...</p>:null}
                        
                    </div>
                    {error ?<p className="alert alert-danger p2">hubo un error</p>:null}
                </div>
            </div>
        </div>
     );
}
 
export default NuevaMascota;