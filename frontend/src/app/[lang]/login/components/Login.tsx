'use client'

import React, { useEffect, useState } from 'react'
import { styles } from '../resource'
import { usePathname, useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import axios from 'axios'
import { onLogin } from '../utils'

interface Props {
    locale: Locales
}

export default function Login({ locale }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (isLogin) {
            router.push(`/${locale}/home`)
        }
    }, [isLogin])

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.imageSection}>
                <img className={styles.image} src="/images/icon-google.png" alt="" />
            </div>
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
                            const isLogin = await onLogin(email, password)
                            setIsLogin(isLogin)
                        }}
                    >
                        로그인
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${locale}/register`)}>
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
