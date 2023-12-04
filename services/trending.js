import axios from "axios";

import {  BASE_URL1 } from "../config";



const fetchTrending = (query) => axios.get(`${BASE_URL1}trending${query || ''}`);
const fetchSearch = (query) => axios.get(`${BASE_URL1}search${query || ''}`);

export {
    fetchTrending,
    fetchSearch
}