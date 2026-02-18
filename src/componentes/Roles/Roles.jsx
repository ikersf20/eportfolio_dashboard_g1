import React, { useContext } from "react";
import UserContext from "../../contextos/UserContext";
import Acordeon from "../Acordeon/Acordeon";


function Roles(props) {
  const user = useContext(UserContext);
  return (
    <>
    {/*<aside>
      <p>ROLES, {user}, {props.token}, {props.menu}</p>
    </aside>
    */}
    <Acordeon></Acordeon>
    </>
    
  );
}

export default Roles