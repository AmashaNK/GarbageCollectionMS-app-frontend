import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import AdminTaskList from './AdminTaskList';
import {addAboutUsData} from '../../Service/EditAboutUsPageService';

const PageContainer = styled('div')({
  display: 'flex',
});

const Sidebar = styled('div')({
  width: '230px',
  backgroundColor: '#f0f0f0',
});

const FormContainer = styled('div')(({ AdminTaskList }) => ({
  flex: AdminTaskList ? '1' : 'auto', 
  padding: '40px',
}));

const CenteredForm = styled('form')({
  border: '1px solid #ccc',
  padding: '20px',
  width: '100%',
  marginTop: '60px',
});

const AddNewsForm = () => {
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFeatureImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file ? file.name : null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const editData = {
        content: content,
        selectedImage: selectedImage,
      };
      const response = await addAboutUsData(editData);
      console.log('Data submitted successfully:', response);
      
    } catch (error) {
      console.error('Error submitting data:', error.message);
      
    }
  };
  
  const handleReset = () => {
    setContent('');
    setSelectedImage(null);
  };

  return (
    <PageContainer>
      <Sidebar>
        <AdminTaskList />
      </Sidebar>
      <FormContainer AdminTaskList>
        <CenteredForm onSubmit={handleSubmit}>
          <div style={{ marginTop: '5px' }}>
            <InputLabel htmlFor="details">Content</InputLabel>
          </div>
          <TextField
            id="content"
            label=""
            placeholder="Enter the news details"
            value={content}
            onChange={handleContentChange}
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
