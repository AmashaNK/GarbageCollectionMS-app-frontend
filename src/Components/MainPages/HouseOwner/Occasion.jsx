import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import HouseOwnerTaskList from "./HouseOwnerTaskList";

const PageContainer = styled("div")({
  display: "flex",
});

const Sidebar = styled("div")({
  width: "230px",
  backgroundColor: "#f0f0f0",
});

const FormContainer = styled("div")(({ HouseOwnerTaskList }) => ({
  flex: HouseOwnerTaskList ? "1" : "auto", // Take up remaining space when sidebar is visible
  padding: "40px",
}));

const CenteredForm = styled("form")({
  border: "1px solid #ccc",
  padding: "20px",
  width: "100%",
  marginTop: "60px",
});

const Occasion = () => {
  const [occasionType, setOccasionType] = useState("");
  const [date, setDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleOccasionTypeChange = (event) => {
    setOccasionType(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleContactNumberChange = (event) => {
    const formattedNumber = event.target.value.replace(/[^0-9]/g, "");
    setContactNumber(formattedNumber);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Occasion Type:", occasionType);
    console.log("Date:", date);
    console.log("Contact Number:", contactNumber);
    console.log("Description:", description);
  };

  const handleReset = () => {
    setOccasionType("");
    setDate("");
    setContactNumber("");
    setDescription("");
  };

  return (
    <PageContainer>
      <Sidebar>
        <HouseOwnerTaskList />
      </Sidebar>
      <FormContainer HouseOwnerTaskList>
        <CenteredForm onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <InputLabel htmlFor="occasionType">Occasion Type</InputLabel>
          </div>
          <FormControl fullWidth>
            <Select
              labelId="occasionType-label"
              value={occasionType}
              onChange={handleOccasionTypeChange}
              size="small"
            >
              <MenuItem value="" disabled>
                Select Type
              </MenuItem>
              <MenuItem value="1">Wedding</MenuItem>
              <MenuItem value="2">Funeral</MenuItem>
              <MenuItem value="3">Other</MenuItem>
            </Select>
          </FormControl>

          <div style={{ marginTop: "10px" }}>
            <InputLabel htmlFor="date">Date</InputLabel>
          </div>
          <TextField
            id="date"
            label=""
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)}
            margin="normal"
            size="small"
            fullWidth
            required
          />

          <div style={{ marginTop: "10px" }}>
            <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
          </div>
          <TextField
            id="contactNumber"
            label=""
            placeholder="Enter the contact Number"
            value={contactNumber}
            onChange={handleContactNumberChange}
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

export default Occasion;
