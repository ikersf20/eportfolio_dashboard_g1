import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../../hooks/useRoles';

function Acordeon(){

    const roles = useRoles();





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
            </Accordion>
        )
    }





    return(
        <>
        {recorrerRoles()}
        </>
    )
}
export default Acordeon;