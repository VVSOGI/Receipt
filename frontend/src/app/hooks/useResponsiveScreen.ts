import { useMediaQuery } from 'react-responsive'

export const useResponsiveScreen = () => {
    const small = useMediaQuery({ maxWidth: 767 })

    const medium = useMediaQuery({ minWidth: 767, maxWidth: 1280 })

    return {
        small,
        medium
    }
}
