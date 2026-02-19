import { useContext, useEffect, useState } from "react"
import roles from "../mocks/mock-roles"
import UserContext from "../contextos/UserContext"
import getRoles from "../servicios/Roles/getRoles"

function useRoles(){

    const user = useContext(UserContext)

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])


    function obtenerRoles(){
        setBuscando(true)
        getRoles().then((roles)=>{
            setLista(roles.find(obj => obj.name === user))
            setBuscando(false)
        })
    }

    useEffect(obtenerRoles,[])
    return {buscando, lista}
}
export default useRoles;