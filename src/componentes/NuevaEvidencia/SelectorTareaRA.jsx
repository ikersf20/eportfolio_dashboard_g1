import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

function SelectorTareaRA(props){

    const [tarea, setTarea] = useState({})

    const handleChange = (event) =>{
        setTarea(event.target.value)
        props.manejarEvidencia(event.target.value)
    }


    function imprimeRA(ra){
        return <MenuItem value={ra}>{ra.observaciones}</MenuItem>
    }



    return(
        <>
        <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tarea}
                        label="Tarea"
                        onChange={handleChange}
                    >
                        {props.tareas.map(imprimeRA)}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}
export default SelectorTareaRA