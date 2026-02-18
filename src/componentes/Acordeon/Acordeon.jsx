import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../../hooks/useRoles';
import opcionesMenu from '../../mocks/mock-administrador';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import Dashboard from '../Dashboard/Dashboard';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados';


function Acordeon(){

    const roles = useRoles();

    const opcionesAdmin = opcionesMenu.administrador;
    const modulosImpartidos = useMisModulosImpartidos();
    const modulosMatriculados = useMisModulosMatriculados();



    function recorrerRoles(){
        return roles.lista?.roles?.map(generarAcordeon)
    }

    function generarAcordeon(rol){

        return(
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{rol}</Typography>
                </AccordionSummary>
                {generarDetails(rol)}
            </Accordion>
        )
    }

    function generarDetails(rol){
        if(rol == "administrador"){
            return opcionesAdmin.map((opcion) => 
                <AccordionDetails>
                    <Link to={opcion.ruta}>{opcion.nombre}</Link>
                </AccordionDetails>
            )
        }else if(rol == "docente"){
            return (modulosImpartidos.lista?.lista?.map((opcion) =>
                <AccordionDetails>
                    <Link to={'/funcionalidaddocente/'+opcion.id}>{opcion.nombre}</Link>
                </AccordionDetails>
            ))
        }else if(rol == "estudiante"){
            return(modulosMatriculados.lista?.lista?.map((opcion) =>
                <AccordionDetails>
                    <Link to={'/funcionalidadestuiante/'+opcion.id}>{opcion.nombre}</Link>
                </AccordionDetails>
            )
            )
        }
        else{
            return <></>
        }
    }



    return(
        <>
        {recorrerRoles()}
        </>
    )
}
export default Acordeon;