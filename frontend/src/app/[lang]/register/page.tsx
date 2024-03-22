'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import { styles } from './resource'

interface Props {
    params: { lang: Locales }
}

export default async function page({ params: { lang } }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const router = useRouter()

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
                <div className={styles.buttonsWrapper}>
                    <button className={styles.registerButton} onClick={() => {}}>
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
