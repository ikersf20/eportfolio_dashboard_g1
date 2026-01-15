import React, { useContext } from "react";
import TokenContext from "../../contextos/TokenContext";
import UserContext from "../../contextos/UserContext";

function Dashboard(props) {

  //Usamos el contexto
  const token = useContext(TokenContext)
  const user = useContext(UserContext)
  
  return (
      <>
      <main>
      <p>MAIN, {user}, {token}, {props.menu}</p>
    </main>
      </>

  );
}

export default Dashboard