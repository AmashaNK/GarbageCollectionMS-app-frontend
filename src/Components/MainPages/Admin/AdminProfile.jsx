import React from "react";
import { Grid, Typography, Avatar, List, ListItem, ListItemText, ListItemIcon, Paper } from "@mui/material";

const profileData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1234567890",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien sem, rutrum non neque vitae, semper vestibulum quam.",
  avatarUrl: "https://source.unsplash.com/random/150x150?face&seed=1",
};

const ProfileDetails = () => {
  return (
    <Paper sx={{ width: "800px", marginTop:'150px', marginLeft:'220px'}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" alignItems="center" spacing={2} sx={{ marginBottom: "16px" }}>
            <Grid item>
              <Avatar alt={profileData.name} src={profileData.avatarUrl} sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                {profileData.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <i className="fas fa-envelope" />
              </ListItemIcon>
              <ListItemText primary={profileData.email} sx={{ fontSize: "1.1rem" }} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="fas fa-phone" />
              </ListItemIcon>
              <ListItemText primary={profileData.phone} sx={{ fontSize: "1.1rem" }} />
            </ListItem>
          </List>
          <Typography variant="body1">{profileData.bio}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileDetails;
