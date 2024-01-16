import useProfile from '@/app/hooks/useProfile'
import axios from 'axios'

export async function onLogin(email: string, password: string) {
    try {
        const tokens = await axios.post('/api/login', {
            email,
            password
        })
        const { accessToken, refreshToken } = tokens.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)

        const profile = await axios.get('/api/auth/getProfile', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        localStorage.setItem('userId', profile.data.id)

        return true
    } catch (err: any) {
        throw err
    }
}
