import axios from 'axios'
import { onLogin } from '../login/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

interface Props {
    email: string
    password: string
    checkPassword: string
    lang: string
    router: AppRouterInstance
    setError: (error: string) => void
}

export async function registerUser({ email, password, checkPassword, lang, router, setError }: Props) {
    try {
        await axios.post('/api/register', {
            email,
            password,
            checkPassword
        })

        await onLogin(email, password)
        router.push(`/${lang}/home`)
    } catch (err: any) {
        const message = err.response?.data?.message
        switch (message) {
            case 'Passwords do not match':
                setError('비밀번호가 일치하지 않습니다.')
                break
            case 'User already exist':
                setError('이미 존재하는 이메일입니다.')
                break
            default:
                break
        }
    }
}
