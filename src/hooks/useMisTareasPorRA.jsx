import { useEffect, useState } from "react";
import getTareasPorRA from "../servicios/TareasRa/getTareasPorRA";


function useMistareasPorRA(){

    const [buscando,setBuscando] = useState(false)
    const [lista,setLista]=useState([])

    function obtenerTareasPorRA(){
        setBuscando(true)
        getTareasPorRA().then((tareas)=>{
            setLista(tareas)
            setBuscando(false)
        })
    }

    useEffect(obtenerTareasPorRA,[])

    return {buscando, lista}



}
export default useMistareasPorRA;