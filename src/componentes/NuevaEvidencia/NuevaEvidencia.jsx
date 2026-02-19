import { useState } from "react"
import tareasRA from "../../mocks/mock-tareasRA"
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
import useMistareasPorRA from "../../hooks/useMisTareasPorRA"

function NuevaEvidencia(){

    const tareasPorRA = useMistareasPorRA()
    const [raSelect, setRA] = useState({})
    const [tareas, setTareas] = useState()

    function manejarEvidencia(ra){
        setRA(ra)
    }

    function anadirEvidencia(evidencia){
        setTareas([...tareas,evidencia])
    }





    return(
        <>
        <SelectorTareaRA tareas={tareasPorRA.lista} manejarEvidencia={manejarEvidencia}></SelectorTareaRA>
        <br />
        <NuevaEvidenciaForm tarea={raSelect} anadirEvidencia={anadirEvidencia}></NuevaEvidenciaForm>
        {console.log(tareas)}
        </>
    )
}
export default NuevaEvidencia;