import { useState } from "react"
import tareasRA from "../../mocks/mock-tareasRA"
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"

function NuevaEvidencia(){

    const [raSelect, setRA] = useState({})
    const [tareas, setTareas] = useState(tareasRA.lista)

    function manejarEvidencia(ra){
        setRA(ra)
    }

    function anadirEvidencia(evidencia){
        setTareas([...tareas,evidencia])
    }





    return(
        <>
        <SelectorTareaRA tareas={tareas} manejarEvidencia={manejarEvidencia}></SelectorTareaRA>
        <br />
        <NuevaEvidenciaForm tarea={raSelect} anadirEvidencia={anadirEvidencia}></NuevaEvidenciaForm>
        {console.log(tareas)}
        </>
    )
}
export default NuevaEvidencia