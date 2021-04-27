import React from 'react'
import Header from './components/Header'
import Mascotas from './components/Mascotas'
import NuevaMascota from './components/NuevaMascota'
import EditarMascota from './components/EditarMascota'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Provider} from  'react-redux'
import store from './store'
function App() {
  return (
  <Router>
    <Provider  store ={store}>
      <Header></Header>
      
      <div className="container mt-4">
        
          <Switch>
            <Route  exact path="/" component={Mascotas} />
            <Route exact path="/mascotas/nuevo" component={NuevaMascota} />
            <Route exact path="/mascotas/editar/:id" component={EditarMascota} />
          </Switch>
      </div>
      </Provider>
  </Router>
  );
}

export default App;
