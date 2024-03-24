import { Locales } from '@/types/locales'
import React from 'react'
import getPaperById from '../api/getPaperById'
import Error from '@/app/common/Error'

interface Props {
    params: { lang: Locales; id: string }
}

export default async function page({ params: { lang, id } }: Props) {
    try {
        const data = await getPaperById(id)

        return <div>page</div>
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
