import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'



function App() {
  const nombre = "Usuario1"
  const token = "1234567890"
  const menu = "Inicio, Perfil, Configuración"

  return (
    <div className="container-fluid">
      <header>
        <div className="row">
          <div className="col-12 header text-center">
            <Cabecera usuario = {nombre}
                      token = {token}
                      menu = {menu}
            ></Cabecera>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col-3 text-center gris main"><Roles usuario = {nombre}
                                                            token = {token}
                                                            menu = {menu}>
                                                      </Roles></div>
        <div className="col-9 text-center verde main"><Dashboard  usuario = {nombre}
                                                                  token = {token}
                                                                   menu = {menu}>
                                                      </Dashboard>
        </div>
      </div>
    </div>
  )
}


export default App
