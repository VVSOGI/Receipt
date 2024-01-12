import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
            axios
                .get('/api/auth/getProfile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then((res) => {
                    setProfile(res.data)
                })
                .catch((err) => {})
        }
    }, [])

    return { profile }
}
