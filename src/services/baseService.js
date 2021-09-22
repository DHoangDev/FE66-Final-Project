import {DOMAIN,USER_LOGIN} from '../util/setting'
import axios from "axios"
import { CYBERSOFTTOKEN } from '../util/setting' 
export class baseService{
    get =(url)=>{
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'GET',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(USER_LOGIN)}`,
                'TokenCybersoft':CYBERSOFTTOKEN
           }
        })
    }
    post =(url,data)=>{
        return axios({
            url:`${DOMAIN}/${url}`,
            data:data,
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`,
               'TokenCybersoft':CYBERSOFTTOKEN
            }
        })
    }
    put =(url,data)=>{
        return axios({
            url:`${DOMAIN}/${url}`,
            data:data,
            method:'PUT',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(USER_LOGIN)}`,
                'TokenCybersoft':CYBERSOFTTOKEN
           }
        })
    }
    delete =(url)=>{
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(USER_LOGIN)}`,
                'TokenCybersoft':CYBERSOFTTOKEN
           }
        })
    }
}