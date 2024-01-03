import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Default, Mobile, Tablet } from './Responsive'
import { useEffect, useState } from 'react'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const { isMobile, isTablet } = useResponsiveScreen()

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) return <Default locale={locale} />

    if (isMobile) return <Mobile locale={locale} />

    if (isTablet) return <Tablet locale={locale} />

    return <Default locale={locale} />
}
