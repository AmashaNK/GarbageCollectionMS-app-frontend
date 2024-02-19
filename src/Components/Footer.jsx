import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CallIcon from '@mui/icons-material/Call';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

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
        <BottomNavigationAction label="Home" icon={<Link to ="/"><HomeIcon fontSize='medium'/></Link>} />
        <BottomNavigationAction label="News" icon={<Link to ="/news"><NewspaperIcon fontSize='medium'/></Link>} />
        <BottomNavigationAction label="About Us" icon={<Link to ="/about-us"><PeopleAltIcon fontSize='medium'/></Link>} />
        <BottomNavigationAction label="Contact Us" icon={<Link to ="/contact-us"><CallIcon fontSize='medium'/></Link>} />
      </BottomNavigation>
      </Paper>
    </Box>
  );
}