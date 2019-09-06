import React from 'react';
import { urlImage } from '../constants/url';
import  axios  from 'axios';

export const getImageApi = ()=>{
    return axios.get(urlImage)
    .then(res=>res.data)
    .catch(err=>err)
    
}
