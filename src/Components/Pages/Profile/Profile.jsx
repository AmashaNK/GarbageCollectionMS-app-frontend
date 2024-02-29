import React, { useState } from "react";
import { Grid, Typography, Avatar, Paper, TextField, Button, IconButton } from "@mui/material";
import AdminTaskList from "../../MainPages/Admin/AdminTaskList";
import EditIcon from "@mui/icons-material/Edit";

const ProfileDetails = () => {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "johndoe@example.com",
    phone: "+1234567890",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien sem, rutrum non neque vitae, semper vestibulum quam.",
    avatarUrl: "https://source.unsplash.com/random/150x150?face&seed=6",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({
        ...profile,
        avatarUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle form submission to update profile data
    console.log("Profile updated:", profile);
    setEditMode(false); // Exit edit mode after submitting changes
  };

  return (
    <div>
      <AdminTaskList />
      <Paper sx={{ width: "800px", height: '450px', marginTop: '30px', marginLeft: '300px', padding: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" alignItems="center" spacing={2} sx={{ marginBottom: "16px" }}>
              <Grid item sx={{ position: 'relative' }}>
                <Avatar alt={profile.name} src={profile.avatarUrl} sx={{ width: 200, height: 200, marginTop:'70px' }} />
                {editMode && (
                  <IconButton onClick={() => document.getElementById('avatarInput').click()} sx={{ position: 'absolute', top: '98px', right: '-8px',backgroundColor: '#F2F1EB', borderRadius: '50%' }}>
                    <EditIcon />
                  </IconButton>
                )}
                <input id="avatarInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              </Grid>
              <Grid item>
                <Typography variant="h4" align="center" gutterBottom>
                  {profile.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              value={profile.name}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: '16px', color: editMode ? 'black' : 'grey' }} // Apply color based on editMode
              disabled={!editMode} // Disable field when not in edit mode
            />
            <TextField
              name="username"
              label="Username"
              value={profile.username}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: '16px', color: editMode ? 'black' : 'grey' }} // Apply color based on editMode
              disabled={!editMode} // Disable field when not in edit mode
            />
            <TextField
              name="phone"
              label="Phone"
              value={profile.phone}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: '16px', color: editMode ? 'black' : 'grey' }} // Apply color based on editMode
              disabled={!editMode} 
            />
            <TextField
              name="bio"
              label="Bio"
              value={profile.bio}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ marginBottom: '16px', color: editMode ? 'black' : 'grey' }} // Apply color based on editMode
              disabled={!editMode} // Disable field when not in edit mode
            />
            {!editMode ? (
              <Button variant="contained" onClick={() => setEditMode(true)}>Edit Profile</Button>
            ) : (
              <Button variant="contained" onClick={handleSubmit}>Save Changes</Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProfileDetails;
