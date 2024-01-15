import { useEffect, useState } from 'react'
import api from '../utils/api'

interface ProfileType {
    id: string
    email: string
    permission: string
}

export default function useProfile() {
    const [profile, setProfile] = useState<ProfileType | null>(null)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken')

        if (accessToken) {
            api.get('/api/auth/getProfile', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                    setProfile(res.data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        }
    }, [])

    return { profile }
}
