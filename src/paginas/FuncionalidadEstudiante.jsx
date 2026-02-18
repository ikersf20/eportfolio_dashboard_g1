import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NuevaEvidencia from '../componentes/NuevaEvidencia/NuevaEvidencia';
import ProgresoCompletoAlumno from '../componentes/ProgresoCompletoAlumno/ProgresoCompletoAlumno';
import RevisionesPendientes from '../componentes/RevisionesPendientes/RevisionesPendientes';


function FuncionalidadEstudiante() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Mi progreso completo" value="1" />
                            <Tab label="Subir nueva evidencia" value="2" />
                            <Tab label="Mis revisiones pendientes" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><ProgresoCompletoAlumno></ProgresoCompletoAlumno></TabPanel>
                    <TabPanel value="2"><NuevaEvidencia></NuevaEvidencia></TabPanel>
                    <TabPanel value="3"><RevisionesPendientes></RevisionesPendientes></TabPanel>
                </TabContext>
            </Box>
        </>
    )
}
export default FuncionalidadEstudiante;