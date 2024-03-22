'use client'

import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState } from '@/store/languageState'
import { HeaderLocales } from '@/types/locales'
import { getLocales } from '@/utils/getLocales'
import useProfile from '@/app/hooks/useProfile'
import { ThemeButton, commonStyles } from '.'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bars4Icon } from '@heroicons/react/24/solid'

interface Props {
    locale: 'en' | 'ko'
}

export default function Header({ locale }: Props) {
    const { profile } = useProfile()
    const [isLoading, setIsLoading] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)
    const [, setLanguage] = useRecoilState(languageState)
    const { small, medium } = useResponsiveScreen()
    const [texts, setTexts] = useState<HeaderLocales | undefined>()
    const router = useRouter()

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('userId')
        router.push(`/${locale}/login`)
    }

    useEffect(() => {
        ;(async () => {
            const headerTexts = await getLocales<HeaderLocales>('header', locale)
            setTexts(headerTexts)
        })()
        setIsLoading(false)
        setLanguage(locale)
    }, [])

    useEffect(() => {
        if (openMenu) {
            document.getElementById('mobileMenu')?.style.setProperty('opacity', '1')
        } else {
            document.getElementById('mobileMenu')?.style.setProperty('opacity', '0')
        }
    }, [openMenu])

    if (isLoading)
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
                        <div className={commonStyles.profileButton}>...Loading</div>
                    </div>
                </nav>
            </header>
        )

    if (small)
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
                        <Bars4Icon onClick={() => setOpenMenu(!openMenu)} className={`${commonStyles.themeButton} w-[40px] h-[40px] `} />
                    </div>
                </nav>
                <div className={`${openMenu ? 'h-[36px]' : 'h-[0px]'} flex ease-in-out duration-500`}>
                    <div id="mobileMenu" className="flex duration-150 ease-out opacity-0">
                        {profile ? (
                            <div className="flex gap-4">
                                <ThemeButton />
                                <div className={commonStyles.themeButton}>{profile.email}</div>
                                <div onClick={logout} className={commonStyles.themeButton}>
                                    {texts?.logout}
                                </div>
                            </div>
                        ) : (
                            <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                                {texts?.login}
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        )

    if (medium)
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
                        {profile ? (
                            <div className="flex gap-4">
                                <div className={commonStyles.themeButton}>{profile.email}</div>
                                <div onClick={logout} className={commonStyles.themeButton}>
                                    {texts?.logout}
                                </div>
                            </div>
                        ) : (
                            <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                                {texts?.login}
                            </Link>
                        )}
                    </div>
                </nav>
            </header>
        )

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

                <div className={`${commonStyles.listRightWrapper}`}>
                    <ThemeButton />
                    {profile ? (
                        <div className="flex gap-4">
                            <div className={commonStyles.themeButton}>{profile.email}</div>
                            <div onClick={logout} className={commonStyles.themeButton}>
                                {texts?.logout}
                            </div>
                        </div>
                    ) : (
                        <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                            {texts?.login}
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
