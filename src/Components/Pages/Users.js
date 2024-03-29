import { useState,useEffect } from "react";
import {get} from '../api/axios'
import useRefreshToken from '../../hooks/useRefreshToken';


const Users=()=>{
    const[users,setUsers]=useState();
    const refresh=useRefreshToken();

    useEffect(()=>{
        let isMounted=true;
        const controller=new AbortController();

        const getUsers=async()=>{   
            try{
                const response=await get('/users',
                    {signal:controller.signal}
                )
                console.log(response.data);
                isMounted&&setUsers(response.data)
            }catch(err){
                console.error(err);
            }
        }
        getUsers();

        return()=>{
            isMounted=false;
            controller.abort();
        }

    },[])

    return(
        <article>
            <h2>Users List</h2>
            {users?.lenght
                ?(
                    <ul>
                        {users.map((user,i)=><li key={i}>{user}</li>)}
                    </ul>
                ):<p>No users to display</p>
            }
            <button onClick={()=>{refresh()}}>Refresh</button>
        </article>
    )
}
export default Users;