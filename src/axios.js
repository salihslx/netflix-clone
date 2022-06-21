import axios from 'axios'
import {baseurl} from './constants/constant'
const instance =axios.create({
    baseURL: baseurl,
});

export default instance 
