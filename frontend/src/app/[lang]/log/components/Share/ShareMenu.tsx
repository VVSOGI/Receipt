'use client'

import { languageState } from '@/store/languageState'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import React from 'react'

export default function ShareMenu() {
    const router = useRouter()
    const language = useRecoilValue(languageState)

    return (
        language && (
            <div
                onClick={() => router.push(`/${language}/order/print`)}
                className="active:bg-gray-700 hover:bg-gray-400 hover:last:text-white hover:border-gray-400 dark:active:bg-white dark:hover:border-white dark:border-[transperant] dark:hover:last:text-dark-bg-title dark:bg-bg-title last:text-gray-700 fixed right-16 bottom-16 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-bg-title bg-white cursor-pointer shadow-share"
            >
                <PencilSquareIcon className="w-[35px] h-[35px]" />
            </div>
        )
    )
}
