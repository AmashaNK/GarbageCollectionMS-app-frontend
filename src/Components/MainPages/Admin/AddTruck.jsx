import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import AdminTaskList from './AdminTaskList';
import { AccountCircle, LocalShipping, BarChart } from '@mui/icons-material';

const AddTruck = () => {
    const paperStyle = { padding: 30, height: '60vh', width: 600, margin: "50px auto", backgroundColor:'#D8D9DA'};
    const textFieldContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
        gap: 10 
    };

    // State for storing field values
    const [formData, setFormData] = useState({
        vehicleID: '',
        type: '',
        capacity: ''
    });

    // Function to handle input change and update formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle save button click
    const handleSave = () => {
        // Perform save operation here with formData
        console.log('Form Data:', formData);
    };

    // Function to handle reset button click
    const handleReset = () => {
        // Clear the form fields by resetting formData state
        setFormData({
            vehicleID: '',
            type: '',
            capacity: ''
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AdminTaskList />
            <Box>
                <Grid style={{ marginRight: '20px', marginTop:'110px' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <div style={textFieldContainerStyle}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'10px' }}>
                                <AccountCircle sx={{ marginRight: 5, marginLeft:5, fontSize: 30  }} />
                                <TextField 
                                    id="vehicleID"
                                    name="vehicleID"
                                    value={formData.vehicleID}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Vehicle ID' 
                                    placeholder='Enter Vehicle ID' 
                                    fullWidth 
                                    required
                                    InputProps={{
                                        style: { borderRadius: 50, backgroundColor: 'white' } 
                                    }}  
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocalShipping sx={{ marginRight: 5, marginLeft:5, fontSize: 30 }} />
                                <TextField 
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Type' 
                                    placeholder='Enter type of the vehicle' 
                                    fullWidth 
                                    required
                                    InputProps={{
                                        style: { borderRadius: 50, backgroundColor: 'white' } 
                                    }}  
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <BarChart sx={{ marginRight: 5, marginLeft:5, fontSize: 30  }} />
                                <TextField 
                                    id="capacity"
                                    name="capacity"
                                    value={formData.capacity}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Capacity' 
                                    placeholder='Enter capacity' 
                                    fullWidth 
                                    required
                                    InputProps={{
                                        style: { borderRadius: 50, backgroundColor: 'white' } 
                                    }} 
                                />
                            </Box>
                        </div>
                        <Button 
                            onClick={handleSave} 
                            variant='contained' 
                            sx={{ 
                                marginTop: '30px', 
                                marginRight: '20px',
                                marginLeft:'150px', 
                                backgroundColor: '#176267', 
                                color: 'white', 
                                width: '170px', 
                                borderRadius:50 
                            }} 
                            size='large' >Save</Button>
                        <Button 
                            onClick={handleReset} 
                            variant='contained' 
                            sx={{ 
                                marginTop: '30px', 
                                backgroundColor: '#FF8989', 
                                color: 'white', 
                                width: '170px',
                                borderRadius:50 
                                }} 
                            size='large' >Reset</Button>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddTruck;
