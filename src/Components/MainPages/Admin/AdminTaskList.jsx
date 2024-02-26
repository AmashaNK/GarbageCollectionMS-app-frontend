import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from "../../Assets/logo.png";

import { AddCircleOutlineOutlined, Info, LocalShipping, Newspaper, Person, PersonAdd, VisibilityOutlined } from '@mui/icons-material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = React.useState('Overview'); // State to track selected menu item

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (text) => {
        setSelectedMenuItem(text); // Update selected menu item
        handleMenuClose(); // Close the menu
    };
    

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(mobileMoreAnchorEl)}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const drawer = (
        <div>
            <div>
                <img src={Logo} style={{ width: '200px', height: '130px', marginTop: '20px', marginLeft: '10px',marginBottom:'30px'}} />
            </div>
            <Toolbar />
            <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '170px', marginTop: '10px', marginLeft: '2px' }}>
                {[
                    { text: 'Overview', icon: <VisibilityOutlined/>, link:'/overview' },
                    { text: 'Add New Bin', icon: <DeleteIcon/>, link:'/add/new/bin' },
                    { text: 'Add Truck', icon: <AddCircleOutlineOutlined />, link:'/add/truck' },
                    { text: 'Add Truck Driver', icon: <PersonAdd />, link:'/add/truck/driver' },
                    { text: 'Available Trucks', icon: <LocalShipping />, link:'/available/trucks' },
                    { text: 'Available Drivers', icon: <Person />, link:'/available/drivers' },
                    { text: 'Edit News Page', icon: <Newspaper />, link:'/edit/newspage' },
                    { text: 'Edit About Us Page', icon: <Info />, link:'/edit/about-us-page' }
                ].map((item, index) => (
                    <ListItem key={item.text} disablePadding component={Link} to={item.link} sx={{ color: 'white' }}>
                        <ListItemButton 
                            onClick={() => {
                                 handleMenuItemClick(item.text);
                                 handleDrawerClose();
                            }}           
                            style={{ backgroundColor: selectedMenuItem === item.text ? '#1C6C6C' : 'transparent' }}>
                            <ListItemIcon>
                                {React.cloneElement(item.icon, { style: { color: 'white' } })}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <AppBar position="fixed" 
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                bgcolor:'#8CC2C2'
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon style={{ color: 'black' }}/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            marginLeft:'20px'
                        }}
                    >

                        {/* display the text of the selected menu item */}
                        {selectedMenuItem} 
                    </Typography>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        bgcolor: '#548D8D',
                        color: 'white',
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        bgcolor: '#548D8D',
                        color: 'white',
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
            <Toolbar /> 
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;