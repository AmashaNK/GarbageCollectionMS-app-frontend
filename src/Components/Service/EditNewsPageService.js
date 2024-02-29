import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/auth';

const editNewsPageData = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const addNewsPageData = async(editData) => {
    try {
        const response = await editNewsPageData.post('/AboutUsPage/addAboutUsData', editData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting data: ' + error.message);
    }
};

export default editAboutUsPageData;