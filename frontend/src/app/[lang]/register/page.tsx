import { Locales } from '@/types/locales'
import Register from './components/Register'

interface Props {
    params: { lang: Locales }
}

export default async function page({ params: { lang } }: Props) {
    return <Register locale={lang} />
}
