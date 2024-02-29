import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import TruckDriverTaskList from "./TruckDriverTaskList";
import { submitComplaint } from "../../Service/TruckDriverComplaintService";

const PageContainer = styled("div")({
  display: "flex",
});

const Sidebar = styled("div")({
  width: "230px",
  backgroundColor: "#f0f0f0",
});

const FormContainer = styled("div")(({ TruckDriverTaskList }) => ({
  flex: TruckDriverTaskList ? "1" : "auto", 
  padding: "40px",
}));

const CenteredForm = styled("form")({
  border: "1px solid #ccc",
  padding: "20px",
  width: "100%",
  marginTop: "60px",
});

const Complaints = () => {
  const [complaintType, setComplaintType] = useState("");

  const [contactNo, setContactNo] = useState("");
  const [description, setDescription] = useState("");

  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };

  const handleContactNoChange = (event) => {
    //const formattedNumber = event.target.value.replace(/[^0-9]/g, "");
    setContactNo(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const complaintData = {
      complaintType: complaintType,
      contactNo: contactNo,
      description: description,
    };
    const response = await submitComplaint(complaintData);
    console.log('Complaint submitted successfully:', response);
    // Optionally, show a success message or perform any other action
  } catch (error) {
    console.error('Error submitting complaint:', error.message);
    // Optionally, show an error message to the user
  }
};

    const handleReset = () => {
      setComplaintType("");
      setContactNo("");
      setDescription("");
    };

  return (
    <PageContainer>
      <Sidebar>
        <TruckDriverTaskList />
      </Sidebar>
      <FormContainer HouseOwnerTaskList>
        <CenteredForm onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <InputLabel htmlFor="complaintsType">Complaints Type</InputLabel>
          </div>
          <FormControl fullWidth>
            <Select
              labelId="complaintsType-label"
              value={complaintType}
              onChange={handleComplaintTypeChange}
              size="small"
            >
              <MenuItem value="" disabled>
                Select Type
              </MenuItem>
              <MenuItem value="Improper Garbage Collection">Improper Garbage Collection</MenuItem>
              <MenuItem value="Service Related Problems">Service Related Problems</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <div style={{ marginTop: "10px" }}>
            <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
          </div>
          <TextField
            id="contactNumber"
            label=""
            placeholder="Enter the contact Number"
            value={contactNo}
            onChange={handleContactNoChange}
            margin="normal"
            size="small"
            fullWidth
            required
          />

          <div style={{ marginTop: "10px" }}>
            <InputLabel htmlFor="description">Description</InputLabel>
          </div>
          <TextField
            id="description"
            lable=""
            placeholder="Enter the description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={6}
            margin="normal"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          >
            Submit
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleReset}
            sx={{
              backgroundColor: "#FF8989",
              width: "100px",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#FF7878",
              },
            }}
          >
            Reset
          </Button>
        </CenteredForm>
      </FormContainer>
    </PageContainer>
  );
};

export default Complaints;
