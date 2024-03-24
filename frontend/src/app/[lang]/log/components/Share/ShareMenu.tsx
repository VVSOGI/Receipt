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
                className={`
                    active:bg-gray-700 hover:bg-gray-400 hover:last:text-white hover:border-gray-400 last:text-gray-700 border-bg-title bg-white
                    dark:active:bg-white dark:hover:border-white dark:border-[transperant] dark:hover:last:text-dark-bg-title dark:bg-bg-title 
                    fixed right-8 bottom-8 w-[50px] h-[50px] flex items-center justify-center rounded-full border cursor-pointer shadow-share
                `}
            >
                <PencilSquareIcon className="w-[35px] h-[35px]" />
            </div>
        )
    )
}
