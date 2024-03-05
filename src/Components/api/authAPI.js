import {post} from './axios';

const AUTH_URL='/auth';

export const login=(data)=>post(`${AUTH_URL}/authenticate`,data);

export const register=(data)=>post(`${AUTH_URL}/register`,data);
