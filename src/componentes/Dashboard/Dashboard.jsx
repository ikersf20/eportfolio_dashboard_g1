import React, { useContext } from "react";
import TokenContext from "../../contextos/TokenContext";

function Dashboard(props) {

  //Usamos el contexto
  const token = useContext(TokenContext)
  
  return (
      <>
      <main>
      <p>MAIN, {props.usuario}, {props.token}, {props.menu}, {token}</p>
    </main>
      </>

  );
}

export default Dashboard