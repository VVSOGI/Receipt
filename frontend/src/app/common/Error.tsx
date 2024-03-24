'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Message {
    statusCode: number
    message: string
    error: string
}

export default function Error({ error }: any) {
    const [message, setMessage] = useState<Message>()
    const router = useRouter()

    useEffect(() => {
        setMessage(error)
    }, [])

    return (
        <div className="grid w-full h-screen px-4 place-content-center">
            <div className="w-full text-center -translate-y-[5rem]">
                <h1 className="font-black text-gray-800 dark:text-white text-[40px]">Error Status Code</h1>
                <h1 className="font-black text-[#e34f4f] text-[30px]">{message?.statusCode}</h1>

                <p
                    className={`
                        lg:text-[100px] sm:text-4xl text-[72px] font-bold tracking-tight text-gray-800
                        dark:text-gray-400 
                        `}
                >
                    {message?.error}
                </p>

                <p className="text-gray-500 text-[24px]">{message?.message}</p>

                <button
                    onClick={() => router.push('/home')}
                    type="button"
                    className={`
                    lg:w-96 w-full inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded hover:bg-primary-hover focus:outline-none focus:ring`}
                >
                    Move to home
                </button>
            </div>
        </div>
    )
}
