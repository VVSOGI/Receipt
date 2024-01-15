import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_BACKEND_URL
})

api.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },

    (error) => {
        if (!localStorage) {
            return
        }

        if (error.response.status === 401) {
            const userId = localStorage.getItem('userId')
            const refreshToken = localStorage.getItem('refreshToken')
            if (refreshToken) {
                return api
                    .get(`/api/auth/refreshToken/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    })
                    .then(async ({ data }) => {
                        localStorage.setItem('accessToken', data)
                        error.config.headers.Authorization = `Bearer ${data}`
                        return await api.request(error.config)
                    })
            }
        }
        return Promise.reject(error)
    }
)

export default api
