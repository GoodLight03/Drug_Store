import axios from "axios";

const REST_API_URL='http://localhost:8080/api/medicine/all';
const REST_API_URLCR='http://localhost:8080/api/medicine/add';

export const listmedecine=()=>axios.get(REST_API_URL);

export const createMed=(med)=> axios.post(REST_API_URLCR,med);

export const getMed=(medid)=>axios.get(REST_API_URL+'/'+ medid);

export const updateMed=(medid,med)=>axios.put(REST_API_URL+'/'+ medid,med);

export const delMed=(medid)=>axios.delete(REST_API_URL+'/'+ medid);