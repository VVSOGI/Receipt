'use client'

import React, { useEffect, useState } from 'react'
import { OrderType } from '@/types/tickets'
import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Desktop, Mobile, Tablet, Loading } from '..'
import { useRecoilValue } from 'recoil'
import { languageState } from '@/store/languageState'

interface Props {
    data: OrderType[]
    next: number
}

export function Orders({ data, next }: Props) {
    const { isMobile, isTablet } = useResponsiveScreen()
    const [loading, setLoading] = useState(false)
    const language = useRecoilValue(languageState)

    useEffect(() => {
        if (language) setLoading(true)
    }, [next, language])

    if (!loading) return <Loading data={data} next={next} />

    if (isMobile) return <Mobile data={data} next={next} />

    if (isTablet) return <Tablet data={data} next={next} />

    return <Desktop data={data} next={next} />
}

/**
 * seo를 높이기 위해서 css에 display none을 한 다음 검색 결과로 데이터를 받아올 수 있게끔만 하고
 * 실제 브라우저로 들어온 사용자에게는 노출하지 않는 방식으로 대응해봤는데 나쁘지 않은듯.
 */
