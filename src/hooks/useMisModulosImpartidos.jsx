import { useContext, useState } from "react"
import impartidos from "../mocks/mock-impartidos"
import UserContext from "../contextos/UserContext"

function useMisModulosImpartidos(){

    const user = useContext(UserContext)

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(impartidos[user])





    return({buscando, lista})
}
export default useMisModulosImpartidos