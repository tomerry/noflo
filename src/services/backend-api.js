import axios from 'axios';
import config from './../config';

class Api {
    constructor() {
        this.client = axios.create({
            baseURL: config.backendUrl
        });
    }

    call(method, path, data = null) {
        return this.client({
            method: method,
            url: path,
            data: data
        });
    }
}

export default new Api();