import React, { useContext } from "react";
import TokenContext from "../../contextos/TokenContext";
import UserContext from "../../contextos/UserContext";
import { Route, Routes } from "react-router-dom";
import FuncionalidadEstudiante from "../../paginas/FuncionalidadEstudiante";
import FuncionalidadDocente from "../../paginas/FuncionalidadDocente";
import PaginaFamiliasProfesionales from "../../paginas/PaginaFamiliasProfesionales";

function Dashboard(props) {

  //Usamos el contexto
  const token = useContext(TokenContext)
  const user = useContext(UserContext)
  
  return (
      <>
      <main>
        <p>MAIN, {user}, {token}, {props.menu}</p>

        <Routes>
        <Route path="/funcionalidadestuiante/:modulo" element={<FuncionalidadEstudiante></FuncionalidadEstudiante>}></Route>
        <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente></FuncionalidadDocente>}></Route>
        <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales></PaginaFamiliasProfesionales>}></Route>
      </Routes>
      </main>


      </>

  );
}

export default Dashboard