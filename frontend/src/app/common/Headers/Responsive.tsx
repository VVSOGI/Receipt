import React from 'react'
import { ThemeButton, commonStyles } from '..'
import Link from 'next/link'

interface Props {
    locale: 'en' | 'ko'
}

export function Default({ locale }: Props) {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.listItem} href={`/${locale}/home`}>
                            홈
                        </Link>
                        <Link className={commonStyles.listItem} href={`/${locale}/order`}>
                            영수증
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        로그인
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export function Tablet({ locale }: Props) {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.listItem} href={`/${locale}/home`}>
                            홈
                        </Link>
                        <Link className={commonStyles.listItem} href={`/${locale}/order`}>
                            영수증
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        로그인
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export function Mobile({ locale }: Props) {
    return (
        <header className={commonStyles.headerWrapperMobile}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.listMobile}>
                        <Link className={commonStyles.listItem} href={`/${locale}/home`}>
                            홈
                        </Link>
                        <Link className={commonStyles.listItem} href={`/${locale}/order`}>
                            영수증
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        로그인
                    </Link>
                </div>
            </nav>
        </header>
    )
}
