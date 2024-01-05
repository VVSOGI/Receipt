import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Default, Mobile, Tablet } from './Responsive'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState } from '@/store/languageState'
import { HeaderLocales } from '@/types/locales'
import { getLocales } from '@/utils/getLocales'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [, setLanguage] = useRecoilState(languageState)
    const { isMobile, isTablet } = useResponsiveScreen()
    const [texts, setTexts] = useState<HeaderLocales | undefined>()

    useEffect(() => {
        ;(async () => {
            const headerTexts = await getLocales<HeaderLocales>('header', locale)
            setTexts(headerTexts)
        })()
        setIsLoading(false)
        setLanguage(locale)
    }, [])

    if (isLoading) return <Default texts={texts} locale={locale} />

    if (isMobile) return <Mobile texts={texts} locale={locale} />

    if (isTablet) return <Tablet texts={texts} locale={locale} />

    return <Default texts={texts} locale={locale} />
}
