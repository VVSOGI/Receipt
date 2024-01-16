import { Locales } from '@/types/locales'
import { getPapers } from './api/getPapers'
import { Papers } from './components'
import Error from '@/app/common/Error'
import ShareMenu from './components/Share/ShareMenu'

interface Props {
    params: { lang: Locales; page: string }
    searchParams: { page: string }
}

export default async function page({ params, searchParams: { page } }: Props) {
    try {
        const data = await getPapers(page || '1')
        return (
            <section className="w-full">
                <Papers data={data.data} total={data.total} />
                <ShareMenu />
            </section>
        )
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
