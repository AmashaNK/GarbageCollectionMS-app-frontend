import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CallIcon from '@mui/icons-material/Call';
import Paper from '@mui/material/Paper';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{pb: 7}}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor:'white', paddingLeft:4, paddingRight:4}} elevation={0}>
      <BottomNavigation
        sx={{ backgroundColor: '609EA2' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon fontSize='medium'/>} />
        <BottomNavigationAction label="News" icon={<NewspaperIcon fontSize='medium'/>} />
        <BottomNavigationAction label="About Us" icon={<PeopleAltIcon fontSize='medium'/>} />
        <BottomNavigationAction label="Contact Us" icon={<CallIcon fontSize='medium'/>} />
      </BottomNavigation>
      </Paper>
    </Box>
  );
}