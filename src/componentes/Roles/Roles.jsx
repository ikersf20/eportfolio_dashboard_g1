import React, { useContext } from "react";
import UserContext from "../../contextos/UserContext";


function Roles(props) {
  const user = useContext(UserContext);
  return (
    <>
    <aside>
      <p>ROLES, {user}, {props.token}, {props.menu}</p>
    </aside>
    </>
    
  );
}

export default Roles