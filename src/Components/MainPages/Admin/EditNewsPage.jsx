import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import AdminTaskList from './AdminTaskList';

const PageContainer = styled('div')({
  display: 'flex',
});

const Sidebar = styled('div')({
  width: '230px',
  backgroundColor: '#f0f0f0',
});

const FormContainer = styled('div')(({ AdminTaskList }) => ({
  flex: AdminTaskList ? '1' : 'auto', // Take up remaining space when sidebar is visible
  padding: '40px',
}));

const CenteredForm = styled('form')({
  border: '1px solid #ccc',
  padding: '20px',
  width: '100%',
  marginTop: '60px',
});

const AddNewsForm = () => {
    const [category, setCategory] = useState('');
    const [newsTitle, setNewsTitle] = useState('');
    const [details, setDetails] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

  const handleNewsTitleChange = (event) => {
    setNewsTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleFeatureImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file ? file.name : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Category:', category);
    console.log('News title:', newsTitle);
    console.log('News details:', details);
    console.log('Feature image:', selectedImage);
  };

  const handleReset = () => {
    setCategory('');
    setNewsTitle('');
    setDetails('');
    setSelectedImage(null);
  };

  return (
    <PageContainer>
      <Sidebar>
        <AdminTaskList />
      </Sidebar>
      <FormContainer AdminTaskList>
        <CenteredForm onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <InputLabel htmlFor="category">Category</InputLabel>
          </div>
          <FormControl fullWidth>
            <Select
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              size="small"
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="1">Environment News</MenuItem>
              <MenuItem value="2">Repairs</MenuItem>
              <MenuItem value="3">About Tax</MenuItem>
              <MenuItem value="4">Dengue</MenuItem>
              <MenuItem value="5">About Tax</MenuItem>
              <MenuItem value="6">About Garbage</MenuItem>
              <MenuItem value="7">About Projects</MenuItem>
            </Select>
          </FormControl>

          <div style={{ marginTop: '10px' }}>
            <InputLabel htmlFor="news-title">News Title</InputLabel>
          </div>
          <TextField
            id="newsTitle"
            label=""
            placeholder="Enter the news title"
            value={newsTitle}
            onChange={handleNewsTitleChange}
            margin="normal"
            size="small"
            fullWidth
            required
          />

          <div style={{ marginTop: '10px' }}>
            <InputLabel htmlFor="details">Details</InputLabel>
          </div>
          <TextField
            id="details"
            label=""
            placeholder="Enter the news details"
            value={details}
            onChange={handleDetailsChange}
            multiline
            rows={6}
            margin="normal"
            fullWidth
            required
          />

          <div style={{ marginBottom: '10px', marginTop: '10px' }}>
            <InputLabel htmlFor="feature-image">Feature Image</InputLabel>
            <input
              id="feature-image"
              type="file"
              hidden
              onChange={handleFeatureImageChange}
            />
            <TextField
              value={selectedImage || ''}
              placeholder="No file chosen"
              margin="normal"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Button
                    component="label"
                    variant="contained"
                    color="primary"
                    htmlFor="feature-image"
                    sx={{width:'130px',marginRight:'10px',backgroundColor:"#d7d9de",
                    '&:hover': {
                        backgroundColor: '#cacccf', 
                      },}}
                  >
                    Choose
                  </Button>
                ),
              }}
              fullWidth
            />
          </div>

            <Button type="submit" variant="contained" color="primary" 
                    sx={{marginRight:'10px',marginBottom:'10px'}}
            >
            Save and Post
          </Button>
          <Button type="submit" variant="contained" onClick={handleReset}
                sx={{ 
                    backgroundColor: '#FF8989', 
                    width:'100px',
                    marginBottom:'10px',
                    '&:hover': {
                        backgroundColor: '#FF7878', 
                      },
                }} >
            Reset
          </Button>
        </CenteredForm>
      </FormContainer>
    </PageContainer>
  );
};

export default AddNewsForm;
