import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import ContactImage from '../../Assets/ContactUs.jpg';
import Header from '../../Header';
import Footer from '../../Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the specific error when the corresponding field is being updated
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before submitting
    const emailIsValid = validateEmail(formData.email);

    if (!emailIsValid) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return;
    }

    // Additional form submission logic
    alert('Success! Thank you for contact us');
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '79vh', marginBottom: '10px', position: 'fixed', marginLeft: '180px' }}>
        <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '1700px', minHeight: '450px', position: 'relative', display: 'flex' }}>
          {/* Image */}
          <img
            src={ContactImage}
            alt="Contact"
            style={{ width: '45%', height: 'auto', borderRadius: '8px' }}
          />

          <div style={{ flex: 1, marginLeft: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>

            <Typography variant="body1" paragraph>
              Please fill out the form below to get in touch with us.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Your Name"
                    fullWidth
                    required
                    onChange={handleChange}
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    onChange={handleChange}
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    onChange={handleChange}
                    name="message"
                  />
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'right' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ backgroundColor: '#609EA2', fontSize: '15px', padding: '8px 18px' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
