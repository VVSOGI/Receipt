import { Locales } from '@/types/locales'
import { getPapers } from './api/getPapers'
import { Papers } from './components'
import Error from '@/app/common/Error'
import ShareMenu from './components/Share/ShareMenu'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { colorborate } from 'colorborate'
import { getPaginationOrder, getPaginationNextPrev } from '@/app/utils/getPaginationNextPrev'
import Link from 'next/link'

interface Props {
    params: { lang: Locales; page: string }
    searchParams: { page: string }
}

export default async function page({ params, searchParams: { page } }: Props) {
    try {
        const defaultPage = Number(page || '1')
        const data = await getPapers(defaultPage)
        const pages = getPaginationOrder(defaultPage)
        const { nextPage, prevPage } = getPaginationNextPrev(defaultPage)
        const colors = colorborate()

        return (
            <section className="w-full">
                <Papers data={data.data} total={data.total} />
                <div className="flex gap-12 justify-center items-center mt-24">
                    <Link href={`/${params.lang}/`}>
                        <ChevronLeftIcon width={24} height={24} />
                    </Link>
                    {pages.map((index) => (
                        <div
                            style={{
                                color: index === Number(defaultPage) ? colors.first : '',
                                fontSize: index === Number(defaultPage) ? '24px' : '18px'
                            }}
                            className="cursor-pointer"
                            key={index}
                        >
                            {index}
                        </div>
                    ))}
                    <ChevronRightIcon className="cursor-pointer" width={24} height={24} />
                </div>
                <ShareMenu />
            </section>
        )
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
