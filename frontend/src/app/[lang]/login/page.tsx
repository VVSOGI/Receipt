import { Locales } from '@/types/locales'
import Login from './components/Login'

interface Props {
    params: { lang: Locales }
}

export default async function page({ params: { lang } }: Props) {
    return <Login locale={lang} />
}
