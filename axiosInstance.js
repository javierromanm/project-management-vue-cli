import axios from 'axios'
import config from './config'

const instance = axios.create({
    baseURL: config.API_ENDPOINT
})

export default instance