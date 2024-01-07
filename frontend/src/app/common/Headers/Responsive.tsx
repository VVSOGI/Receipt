import React from 'react'
import { ThemeButton, commonStyles } from '..'
import Link from 'next/link'
import { HeaderLocales } from '@/types/locales'

interface Props {
    texts: HeaderLocales | undefined
    locale: 'en' | 'ko'
}

export function Default({ texts, locale }: Props) {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.themeButton} href={`/${locale}/home`}>
                            {texts?.home}
                        </Link>
                        <Link className={commonStyles.themeButton} href={`/${locale}/order`}>
                            {texts?.log}
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        {texts?.login}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export function Tablet({ texts, locale }: Props) {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.themeButton} href={`/${locale}/home`}>
                            {texts?.home}
                        </Link>
                        <Link className={commonStyles.themeButton} href={`/${locale}/order`}>
                            {texts?.log}
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        {texts?.login}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export function Mobile({ texts, locale }: Props) {
    return (
        <header className={commonStyles.headerWrapperMobile}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.listMobile}>
                        <Link className={commonStyles.themeButton} href={`/${locale}/home`}>
                            {texts?.home}
                        </Link>
                        <Link className={commonStyles.themeButton} href={`/${locale}/order`}>
                            {texts?.log}
                        </Link>
                    </li>
                </ul>

                <div className={commonStyles.listRightWrapper}>
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        {texts?.login}
                    </Link>
                </div>
            </nav>
        </header>
    )
}
