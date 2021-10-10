
import axios from 'axios'
import { DOMAIN, USER_LOGIN, ACCESS_TOKEN, CYBERSOFTTOKEN } from '../Util/Setting'

export class baseService {
    get = (url, data, nhom) => {
        if (nhom === null) {
            return axios({
                url: `${DOMAIN}/${url}${data}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                    'TokenCybersoft': CYBERSOFTTOKEN
                }
            })
        } else {
            if (data === '') {
                return axios({
                    url: `${DOMAIN}/${url}${nhom}`,
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                        'TokenCybersoft': CYBERSOFTTOKEN
                    }
                })
            } else {
                return axios({
                    url: `${DOMAIN}/${url}${data}${nhom}`,
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                        'TokenCybersoft': CYBERSOFTTOKEN
                    }
                })
            }
        }
    }
    post = (url, data) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            data: data,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': CYBERSOFTTOKEN
            }
        })
    }
    put = (url, data) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            data: data,
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': CYBERSOFTTOKEN
            }
        })
    }
    delete = (url, data) => {
        return axios({
            url: `${DOMAIN}/${url}${data}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': CYBERSOFTTOKEN
            }
        })
    }
}