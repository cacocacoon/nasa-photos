import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import pipe from 'utils/pipe'

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY
const NASA_API_URL = process.env.REACT_APP_NASA_API_URL

function createAxiosInstance(config: AxiosRequestConfig<any> = {}) {
    return axios.create({ ...config })
}

function withNasaApiKey(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.request.use((config) => {
        config.params = {
            ...(config.params ?? {}),
            api_key: NASA_API_KEY,
        }

        return config
    })

    return axiosInstance
}

export const nasaApiInstance = pipe(
    createAxiosInstance,
    withNasaApiKey
)({
    baseURL: NASA_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
