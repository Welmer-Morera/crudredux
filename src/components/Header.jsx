import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
            <div className="container ">
                <h1>
                <Link to="/" className="text-light">Mascotas</Link>
                </h1>
                
            </div>
             <Link to="/mascotas/nuevo" 
            className="btn btn-dark nuevo-post d-block d-md-inline-block"> &#43; Nuevo</Link> 

        </nav>
     );
}
 
export default Header