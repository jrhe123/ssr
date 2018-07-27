// Libraries
import Promise from 'bluebird';
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
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.responseText);
                return;
            } else {
                resolve('');
                return;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    })
}