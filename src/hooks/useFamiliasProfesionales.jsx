import { useEffect, useState } from "react";
import getFamiliasProfesionales from "../servicios/FamiliasProfesionales/getFamiliasProfesionales";


function useFamiliasProfesionales(){

    const [buscando,setBuscando]=useState(false)
    const [lista, setLista] = useState([])

    function obtenerFamilias(){
        setBuscando(true)
        getFamiliasProfesionales().then((famililas)=>{
            setLista(famililas)
            setBuscando(false)
        })
    }

    useEffect(obtenerFamilias, [])
    return {buscando, lista}


}
export default useFamiliasProfesionales;