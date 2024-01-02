import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const GoogleLoginButton = () => {
    const clientId = '859522995143-j3vqmechevn6ickstjhd6oqun4ji0nfa.apps.googleusercontent.com'
    const router = useRouter()
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={async (res) => {
                        const { data } = await axios.post('/api/google', { token: res.credential })
                        const { accessToken, refreshToken } = data
                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('refreshToken', refreshToken)
                        router.push(`https://developers.xrcloud.app/ko/login?token=${res.credential}`)
                    }}
                    onError={() => {
                        console.log()
                    }}
                />
            </GoogleOAuthProvider>
        </>
    )
}

export default GoogleLoginButton
