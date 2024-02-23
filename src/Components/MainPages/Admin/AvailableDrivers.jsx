import React from 'react';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import AdminTaskList from './AdminTaskList';

    const columns = [
        { id: 'employeeID', label: 'Employee ID', minWidth: 100, align: 'center' },
        { id: 'name', label: 'Name', minWidth: 180, align: 'center' },
        { id: 'mobileNumber', label: 'Mobile Number', minWidth: 100, align: 'center' },
    ];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData(),
    createData(),
    createData(),
    // Add more rows as needed
];

const AvailableDrivers = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AdminTaskList />
            <Grid container justifyContent="center" alignItems="center" style={{ marginLeft: '200px' }}>
                <Grid item xs={12} style={{ margin: '120px 20px' }}>
                    <Paper sx={{ width: '70%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell 
                                                            key={column.id} 
                                                            align={column.align} 
                                                            style={{ 
                                                                borderRight: '1px solid rgba(224, 224, 224, 1)' // Adding vertical border
                                                        }}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AvailableDrivers;
