import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/auth';

const complaintService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitComplaint = async(complaintData) => {
    try {
        const response = await complaintService.post('/HouseOwnerComplaints/addComplaints', complaintData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting complaint: ' + error.message);
    }
};

export default complaintService;