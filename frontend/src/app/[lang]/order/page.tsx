import { Locales } from '@/types/locales'
import { getOrders } from './api/getOrders'
import { commonStyles } from '@/app/common/resource'
import { Orders } from './components'
import Error from '@/app/common/Error'

interface Props {
    params: { lang: Locales; page: string }
    searchParams: { page: string }
}

export default async function page({ params, searchParams }: Props) {
    const next = 0 + searchParams.page ? Number(searchParams.page) : 0 * 30

    try {
        const data = await getOrders()
        return (
            <section className="w-full">
                <Orders next={next} data={data} />
            </section>
        )
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
