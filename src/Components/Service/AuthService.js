import { Password } from '@mui/icons-material';
import * as authAPI from '../api/authAPI';


const LoginService = async(logInData) => {
     try {
         const response = await authAPI.login(logInData);
        return response;
     } catch (error) {
         throw new Error('Error Logging to the system: ' + error.message);
     }
 };
 const RegisterService =async(registerData)=>{
    try{
        const response = await authAPI.register(registerData);
        return response;
    }catch (error) {
            throw new Error('Error Registering to the system: ' + error.message);
    }

 };

 export  {LoginService,RegisterService};



// export default function LoginService(){
//     const login=(nicNo,password)=>{
//         authAPI.login({nicNo,password})
//     }
//     return login;
// }
// const complaintService = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export const submitComplaint = async(complaintData) => {
//     try {
//         const response = await complaintService.post('/TruckDriverComplaints/addComplaints', complaintData);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error submitting complaint: ' + error.message);
//     }
// };
