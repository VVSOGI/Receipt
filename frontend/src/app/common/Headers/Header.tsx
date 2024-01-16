import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState } from '@/store/languageState'
import { HeaderLocales } from '@/types/locales'
import { getLocales } from '@/utils/getLocales'
import useProfile from '@/app/hooks/useProfile'
import { ThemeButton, commonStyles } from '..'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    const { profile } = useProfile()
    const [isLoading, setIsLoading] = useState(true)
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
