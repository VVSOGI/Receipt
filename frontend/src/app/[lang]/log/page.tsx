import { Locales } from '@/types/locales'
import { getPapers } from './api/getPapers'
import { Papers } from './components'
import Error from '@/app/common/Error'
import ShareMenu from './components/Share/ShareMenu'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { colorborate } from 'colorborate'
import { getPaginationOrder, getPaginationNextPrev, isCanNext, isCanPrev } from '@/app/utils/getPaginationNextPrev'
import Link from 'next/link'

interface Props {
    params: { lang: Locales; page: string }
    searchParams: { page: string }
}

export default async function page({ params, searchParams: { page } }: Props) {
    try {
        const defaultPage = Number(page || '1')
        const chapter = defaultPage % 5 !== 0 ? Math.floor(defaultPage / 5) : Math.floor((defaultPage - 1) / 5)

        const { data, total } = await getPapers(defaultPage)
        const { nextPage, prevPage } = getPaginationNextPrev(chapter)
        const pages = getPaginationOrder(chapter, total)

        const prev = isCanPrev(chapter)
        const next = isCanNext(chapter, total)
        const colors = colorborate()

        return (
            <section className="w-full">
                <Papers data={data} total={total} />
                <div className="flex gap-12 justify-center items-center mt-12">
                    <Link
                        className={`${prev ? 'cursor-pointer' : 'dark:text-gray-700 text-gray-300 cursor-not-allowed'}`}
                        href={prev ? `/${params.lang}/log?page=${prevPage}` : `/${params.lang}/log?page=${defaultPage}`}
                    >
                        <ChevronLeftIcon width={18} height={18} />
                    </Link>
                    {pages.map((index) => (
                        <Link
                            href={`/${params.lang}/log?page=${index}`}
                            style={{
                                color: index === Number(defaultPage) ? colors.first : '',
                                fontSize: index === Number(defaultPage) ? '24px' : '14px'
                            }}
                            className="cursor-pointer"
                            key={index}
                        >
                            {index}
                        </Link>
                    ))}
                    <Link
                        className={`
                            ${next ? 'cursor-pointer' : 'dark:text-gray-700 text-gray-300 cursor-not-allowed'}
                                `}
                        href={next ? `/${params.lang}/log?page=${nextPage}` : `/${params.lang}/log?page=${defaultPage}`}
                    >
                        <ChevronRightIcon width={18} height={18} />
                    </Link>
                </div>
                <ShareMenu />
            </section>
        )
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
