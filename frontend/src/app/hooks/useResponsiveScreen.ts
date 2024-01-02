import { useMediaQuery } from 'react-responsive'

export const useResponsiveScreen = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1280 })

    return {
        isMobile,
        isTablet
    }
}
