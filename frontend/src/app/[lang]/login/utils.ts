import axios from 'axios'

export async function onLogin(email: string, password: string) {
    try {
        const { data } = await axios.post('/api/login', {
            email,
            password
        })

        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        return true
    } catch (err) {
        return false
    }
}
