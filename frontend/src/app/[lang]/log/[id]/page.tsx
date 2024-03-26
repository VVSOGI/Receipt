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
        const createdAt = new Date(data.createdAt).toLocaleString()
        const updatedAt = new Date(data.updatedAt).toLocaleString()
        return (
            <div className="w-full flex gap-4">
                <div className="flex-3 pr-6 border-gray-200 border-r border-dashed">
                    <h1 className="text-title font-title">{data.title}</h1>
                    <p className="text-base2 font-base  whitespace-pre-wrap">{data.description}</p>
                </div>
                <div className="h-fit flex-1 flex flex-col p-6 gap-4">
                    <div className="select-none">
                        <h2 className="text-base5 font-bold">Link</h2>
                        <a
                            className={`
                            font-base
                            hover:text-downfull-blue
                        `}
                            href={data.commitUrl}
                        >
                            {data.commitUrl}
                        </a>
                    </div>
                    <div>
                        <h2 className="text-base5 font-bold select-none">Email</h2>
                        <p className="font-base">{data.email}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h2 className="text-base2 font-medium select-none">Created</h2>
                        <p className="font-base0">{createdAt}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h2 className="text-base2 font-medium select-none">Updated</h2>
                        <p className="font-base0">{updatedAt}</p>
                    </div>
                </div>
            </div>
        )
    } catch (err: any) {
        const error = JSON.parse(err.message)
        return <Error error={error} />
    }
}
