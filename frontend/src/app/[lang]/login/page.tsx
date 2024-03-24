'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import { styles } from './resource'
import { onLogin } from './utils'

interface Props {
    params: { lang: Locales }
}

export default function page({ params: { lang } }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginSection}>
                <div className={styles.loginTitle}>로그인</div>
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
                <div className={styles.buttonsWrapper}>
                    <button
                        className={styles.loginButton}
                        onClick={async () => {
                            try {
                                await onLogin(email, password)
                                router.push(`/${lang}/home`)
                            } catch (error: any) {}
                        }}
                    >
                        로그인
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${lang}/register`)}>
                        회원가입 하기
                    </button>
                </div>
                <div className={styles.oauthWrapper}>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-google.png" alt="" />
                    </div>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-facebook.png" alt="" />
                    </div>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-github.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
