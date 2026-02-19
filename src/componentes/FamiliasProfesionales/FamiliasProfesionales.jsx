import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';


function FamiliasProfesionales(){

    const familiasProfesionales = useFamiliasProfesionales();



    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'NOMBRE', width: 130 },
  { field: 'descripcion', headerName: 'DESCRIPCIÓN', width: 130 },
  {
    field: 'codigo',
    headerName: 'CODIGO',
    width: 90,
  },
  
];
    const rows = familiasProfesionales?.lista?.familias_profesionales;

    const paginationModel = { page: 0, pageSize: 5 };
    return(<>
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sortModel={"id"}
        sx={{ border: 0 }}
      />
    </Paper>
    </>)
}
export default FamiliasProfesionales;