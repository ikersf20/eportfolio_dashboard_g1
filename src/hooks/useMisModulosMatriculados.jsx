import { useContext, useEffect, useState } from "react"
import UserContext from "../contextos/UserContext"
import modulosMatriculados from "../mocks/mock-matriculados"
import getModulosMatriculados from "../servicios/ModulosMatriculados/getModulosMatriculados"

function useMisModulosMatriculados(){

    const user = useContext(UserContext)

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(modulosMatriculados[user])


    function obtenerModulosMatriculados(){
        setBuscando(true)
        getModulosMatriculados().then((modulos)=>{
            setLista(modulos[user])
            setBuscando(false)
        })
    }

    useEffect(obtenerModulosMatriculados,[])

    return({buscando, lista})
}
export default useMisModulosMatriculados;