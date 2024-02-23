import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import AdminTaskList from './AdminTaskList';
import { AccountCircle, Badge, Call} from '@mui/icons-material';

const AddTruck = () => {
    const paperStyle = { padding: 30, height: '60vh', width: 600, margin: "50px auto", backgroundColor:'#D8D9DA'};
    const textFieldContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
        gap: 10 
    };

    
    const [formData, setFormData] = useState({
        employeeID: '',
        name: '',
        mobileNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    const handleSave = () => {
        console.log('Form Data:', formData);
    };

    
    const handleReset = () => {
        setFormData({
            employeeID: '',
            name: '',
            mobileNumber: ''
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
                                <Badge sx={{ marginRight: 5, marginLeft:5, fontSize: 30  }} />
                                <TextField 
                                    id="employeeID"
                                    name="employeeID"
                                    value={formData.vehicleID}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Employee ID' 
                                    placeholder='Enter Employee ID' 
                                    fullWidth 
                                    required
                                    InputProps={{
                                        style: { borderRadius: 50, backgroundColor: 'white' } 
                                    }}  
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccountCircle sx={{ marginRight: 5, marginLeft:5, fontSize: 30 }} />
                                <TextField 
                                    id="name"
                                    name="name"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Name' 
                                    placeholder='Enter your name' 
                                    fullWidth 
                                    required
                                    InputProps={{
                                        style: { borderRadius: 50, backgroundColor: 'white' } 
                                    }}  
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Call sx={{ marginRight: 5, marginLeft:5, fontSize: 30  }} />
                                <TextField 
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.capacity}
                                    onChange={handleInputChange}
                                    variant="outlined" 
                                    label='Mobile Number' 
                                    placeholder='Enter your mobile number' 
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
                            size='large' >Register</Button>
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
