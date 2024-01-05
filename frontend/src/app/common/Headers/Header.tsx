import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Default, Mobile, Tablet } from './Responsive'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { languageState } from '@/store/languageState'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [, setLanguage] = useRecoilState(languageState)
    const { isMobile, isTablet } = useResponsiveScreen()

    useEffect(() => {
        setIsLoading(false)
        setLanguage(locale)
    }, [])

    if (isLoading) return <Default locale={locale} />

    if (isMobile) return <Mobile locale={locale} />

    if (isTablet) return <Tablet locale={locale} />

    return <Default locale={locale} />
}
