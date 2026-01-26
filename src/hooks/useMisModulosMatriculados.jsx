import { useContext, useState } from "react"
import UserContext from "../contextos/UserContext"
import modulosMatriculados from "../mocks/mock-matriculados"

function useMisModulosMatriculados(){

    const user = useContext(UserContext)

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(modulosMatriculados[user])




    return({buscando, lista})
}
export default useMisModulosMatriculados