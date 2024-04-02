'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import { styles } from './resource'
import { registerUser } from './utils'

interface Props {
    params: { lang: Locales }
}

export default function page({ params: { lang } }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        setError(null)
    }, [email, password, checkPassword])

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginSection}>
                <div className={styles.loginTitle}>회원가입 하기</div>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Check your password again"
                        className={styles.input}
                        onChange={(e) => setCheckPassword(e.target.value)}
                    />
                </div>
                <div>{error && <p className="text-red-500 text-base0">{error}</p>}</div>
                <div className={styles.buttonsWrapper}>
                    <button
                        className={styles.registerButton}
                        onClick={() => registerUser({ email, password, checkPassword, lang, router, setError })}
                    >
                        회원가입 하기
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${lang}/login`)}>
                        로그인 페이지 이동
                    </button>
                </div>
            </div>
        </div>
    )
}
