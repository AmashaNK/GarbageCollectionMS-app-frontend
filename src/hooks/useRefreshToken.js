import {post} from '../Components/api/axios'
import axios from 'axios';
import useAuth from './useAuth';
const useRefreshToken=()=>{
    //const {setAuth}=useAuth();
    const {auth,setAuth}=useAuth();

    const refresh=async()=>{
      //     const response=await axios.post('http://localhost:8080/api/v1/auth/refresh-token'
      //         //withCredentials:true
      //     )
      //     setAuth(prev=>{
      //         console.log(JSON.stringify(prev));
      //         console.log(response.data.accessToken)
      //         return{
      //             ...prev,accessToken:response.data.accessToken
      //         }
      //     });
      //     return response.data.accessToken;
      // }
      // return refresh;
      const prevAccesToken = auth?.accessToken;
      console.log(prevAccesToken)
      const authHeader = `Bearer ${prevAccesToken}`; // Replace with your actual existing access token
      const apiUrl = "http://localhost:8080/api/v1/auth/refresh-token"; // Replace with your actual backend endpoint

      try {
        const response = await axios.post(apiUrl, null, {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
        });
        //
        

        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data; // Assuming the response has these fields

          // Handle the new tokens as needed (e.g., store them in state, local storage, or a global context)
          console.log("New tokens:", { accessToken, refreshToken });
        } else {
          console.error("Failed to refresh token:", response.statusText);
        }
        
        ///
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        //return response.data.accessToken;
    
    } catch (error) {
        console.error("Error while refreshing token:", error.message);
      }

      //

    }
    return refresh;
}
export default useRefreshToken;