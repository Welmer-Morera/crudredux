import React from 'react'
const EditarMascota = () => {
    return ( 
        <div className="row justify-content-center">
        <div  className="col-md-10">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-left mb-4 font-weight-bold">
                    Editar Mascota
                    </h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre </label>
                            <input  type="text"className="form-control" placeholder="Nombre de la mascota" name="nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label>Sexo </label>
                            <select  name="sexo" class="form-control ">
                                
                                <option  value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Edad </label>
                            <input  type="number"className="form-control" placeholder="Edad de de la mascota" name="edad"
                            />
                        </div>
                        <div className="form-group">
                            <label>Peso </label>
                            <input  type="number"className="form-control" placeholder="Nombre de la mascota" name="precio"
                            />
                        </div>
                        <div className="form-group">
                            <label>Dueño </label>
                            <input  type="text" className="form-control" placeholder="Dueño de la mascota" name="dueño"
                            />
                        </div>
                        <button Type="submit" className="btn btn-primary  d-block w-100"> Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default EditarMascota;