// Libraries
import fetch from 'isomorphic-fetch';

// config
import config from '../config';


export const dxApi = (url, params, isAuth) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (isAuth) headers['api-key'] = config.apiKey;
    return (
        fetch(config.apiHost + url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .catch((error) => {
                return error;
            })
    )
}


export const dxFileApi = (url, formData, isAuth) => {
    let headers = {
        'Accept': 'application/json',
    }
    if (isAuth) headers['api-key'] = config.apiKey;
    return (
        fetch(config.apiHost + url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .catch((error) => {
                return error;
            })
    )
}

export const dxHtmlApi = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = process;
    xhr.open("GET", url, true);
    xhr.send();
    function process() {
        if (xhr.readyState == 4) {
            return xhr.responseText;
        }else{
            return '';
        }
    }
}