import { useContext } from "react"
import { useForm } from "react-hook-form"
import UserContext from "../../contextos/UserContext"
import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function NuevaEvidenciaForm(props){

    const user = useContext(UserContext)
    const FORMINICIAL=
        {
            tarea_id:props.tarea.id,
            estudiante_id:user,
            url: "",
            descripcion: "",
            estado_validacion: "pendiente"
        };

    const{register,reset,handleSubmit,watch,formState:{errors}}=useForm({defaultValues:FORMINICIAL})

    
    const manejarForm = handleSubmit((ra)=>{
        props.anadirEvidencia(ra)
        reset(FORMINICIAL)
    });


    return(
        <>
        <form action="" onSubmit={manejarForm}></form>

        <TextField type="text" required variant="outlined" label="URL" fullWidth={true}
        {...register("url",{pattern:{
                        value:/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
                        message:"Ingrese una url valida"
                }})} helperText={errors.url?.message}/><br />
        <br />
        <TextField type="text" required variant="outlined" label="Observaciones" multiline minRows={5} fullWidth={true} {...register("descripcion")}/><br />
        <br />
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button type="submit" variant="contained" endIcon={<SendIcon></SendIcon>}>AÑADIR EVIDENCIA</Button>
        </Box>
        </>
    )
}
export default NuevaEvidenciaForm