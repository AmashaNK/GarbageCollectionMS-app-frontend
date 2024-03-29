import Axios from 'axios';

   // const BASE_URL='http://localhost:8080/api/v1';

export const axios= Axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }  
})

function embedParams(url,params){
    if(params){
        const urlParams=new URLSearchParams(params);
        return `${url}?${urlParams.toString()}`;
    }
    return url;
}


function responseExtractor(response){
    return {data:response.data,status:response.status}
}

export const get=(url,params)=>axios.get(embedParams(url,params)).then(response=>responseExtractor(response));

export const post=(url,data,params)=>axios.post(embedParams(url,params),JSON.stringify(data)).then(response=>responseExtractor(response));

export const put=(url,data,params)=>axios.put(embedParams(url,params),JSON.stringify(data)).then(response=>responseExtractor(response));

export const del=(url,params)=>axios.delete(embedParams(url,params)).then(response=>responseExtractor(response));