'use client'

import Button from '@/app/common/Button'
import React, { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import config from '../../../../../tailwind.config'
import { oneMobilePopOTF } from '@/fonts'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import api from '@/app/utils/api'

interface Props {
    params: { lang: Locales }
}

export default function page({ params: { lang } }: Props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()

    const createReceipt = async () => {
        const accessToken = localStorage.getItem('accessToken')
        try {
            await api.post(
                '/api/boards',
                { title, description },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            router.push(`/${lang}/log`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) router.push(`/${lang}/login`)
    }, [])

    return (
        <div className="w-full my-[32px]">
            <div className={`${oneMobilePopOTF.className} text-[24px]`}>영수증 출력</div>
            <div className="w-full my-6 border border-gray-300 border-dashed border-b-0" />
            <div className="flex flex-col gap-4">
                <TextareaAutosize
                    placeholder="글 제목을 입력해주세요."
                    onChange={(e) => setTitle(e.target.value)}
                    className="dark:bg-dark-textarea-bg w-full px-[16px] py-[24px] resize-none outline-none bg-gray-200 rounded-[4px]"
                    minRows={2}
                />
                <TextareaAutosize
                    placeholder="글 내용을 입력해주세요."
                    onChange={(e) => setDescription(e.target.value)}
                    className="dark:bg-dark-textarea-bg w-full px-[16px] py-[24px] resize-none outline-none bg-gray-200 rounded-[4px]"
                    minRows={10}
                ></TextareaAutosize>
            </div>
            <div className="w-full my-6 border border-gray-300 border-dashed border-b-0" />
            <div className="flex justify-end">
                <Button
                    text="Publish"
                    onClick={() => createReceipt()}
                    mainBgColor={(config.theme?.colors as any)['downfull-blue']}
                    subBgColor={(config.theme?.colors as any)['downfull-blue-100']}
                />
            </div>
        </div>
    )
}
