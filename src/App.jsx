import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'


import TokenContext from './contextos/TokenContext';
import UserContext from './contextos/UserContext';
import NuevaEvidencia from './componentes/NuevaEvidencia/NuevaEvidencia'



function App() {
  const nombre = "Victor"
  const token = "dada78wda7w"
  const menu = "menu"

  const [user, setUser] = useState(nombre)

  return (
    <>
    <TokenContext.Provider value={token}>
    <div className="container-fluid">
      <header>
        <div className="row">
          <div className="col-12 header text-center">
            <Cabecera usuario = {user}>
            </Cabecera>
          </div>
        </div>
      </header>
      <UserContext.Provider value={user}>
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
      </UserContext.Provider>
    </div>
    </TokenContext.Provider>
    </>
  )
}


export default App
