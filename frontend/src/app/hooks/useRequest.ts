import React, { useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'

export default function useRequest() {
    const [api, setApi] = useState<AxiosInstance | undefined>()

    useEffect(() => {
        const instance = axios.create({
            baseURL: process.env.NODE_BACKEND_URL
        })

        instance.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        instance.interceptors.response.use(
            (response) => {
                return response
            },

            (error) => {
                console.log(error)
                if (error.response.status === 401) {
                    const userId = localStorage.getItem('userId')
                    const refreshToken = localStorage.getItem('refreshToken')
                    const accessToken = localStorage.getItem('accessToken')
                    if (refreshToken) {
                        instance
                            .get(`/api/auth/refreshToken/${userId}`, {
                                headers: {
                                    Authorization: `Bearer ${accessToken}`
                                }
                            })
                            .then((res) => {})
                    }
                }
                return Promise.reject(error)
            }
        )

        setApi(instance)
    }, [])

    return api
}
