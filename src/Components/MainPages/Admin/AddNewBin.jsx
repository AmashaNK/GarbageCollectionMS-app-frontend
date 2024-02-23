import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import AdminTaskList from './AdminTaskList';

const AddNewBin = () => {
    const [binDetails, setBinDetails] = useState({
        binName: '',
        height: '',
        baseArea: '',
        numOfHouses: ''
    });

    const paperStyle = { padding: 30, height: '70vh', width: 400, margin: "50px auto" };
    const textFieldContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15, // Adding margin at the top
        gap: 10 // Adding gap between TextField components
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBinDetails({
            ...binDetails,
            [name]: value
        });
    };

    const handleSave = () => {
        // Here you can perform saving logic using binDetails state
        console.log('Saving bin details:', binDetails);
    };

    const handleReset = () => {
        setBinDetails({
            binName: '',
            height: '',
            baseArea: '',
            numOfHouses: ''
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AdminTaskList />
            <Box>
                <Grid style={{ marginRight: '20px', marginTop:'110px' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <h3>ADD</h3>
                        <div style={textFieldContainerStyle}>
                            <TextField
                                id="binName"
                                name="binName"
                                variant="standard"
                                label='Bin Name'
                                placeholder='Enter bin name'
                                fullWidth
                                required
                                value={binDetails.binName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                id="height"
                                name="height"
                                variant="standard"
                                label='Height'
                                placeholder='Enter height of the bin'
                                fullWidth
                                required
                                value={binDetails.height}
                                onChange={handleInputChange}
                            />
                            <TextField
                                id="baseArea"
                                name="baseArea"
                                variant="standard"
                                label='Base Area'
                                placeholder='Enter base area'
                                fullWidth
                                required
                                value={binDetails.baseArea}
                                onChange={handleInputChange}
                            />
                            <TextField
                                id="numOfHouses"
                                name="numOfHouses"
                                variant="standard"
                                label='No. of Target Houses'
                                placeholder='Enter number'
                                fullWidth
                                required
                                value={binDetails.numOfHouses}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            variant='contained'
                            sx={{ marginTop: '30px', marginRight: '20px', backgroundColor: '#176267', color: 'white', width: '160px' }}
                            size='medium'
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant='contained'
                            sx={{ marginTop: '30px', backgroundColor: '#FF8989', color: 'white', width: '160px' }}
                            size='medium'
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddNewBin;
