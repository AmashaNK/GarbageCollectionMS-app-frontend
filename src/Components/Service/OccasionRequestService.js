import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/auth';

const occasionRequestService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitRequest = async(requests) => {
    try {
        const response = await occasionRequestService.post('/OccasionRequest/addRequest', requests);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting request: ' + error.message);
    }
};

export default occasionRequestService;