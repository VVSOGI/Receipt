'use client'

import React, { useEffect, useState } from 'react'
import { OrderType } from '@/types/tickets'
import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Order } from '..'
import { useRecoilValue } from 'recoil'
import { languageState } from '@/store/languageState'
import { styles } from '../../resource'
import { commonStyles } from '@/app/common'

interface Props {
    data: OrderType[]
    next: number
}

export function Orders({ data, next }: Props) {
    const { small, medium } = useResponsiveScreen()
    const [loading, setLoading] = useState(false)
    const [papers, setPapers] = useState()
    const language = useRecoilValue(languageState)

    useEffect(() => {
        if (language) setLoading(true)
    }, [next, language])

    if (!loading)
        return (
            <div className="hidden">
                <div className={styles.ordersMobile}>
                    <div className={commonStyles.dividerMobile} />
                    <div className={styles.ordersWrapper}>
                        <Order data={data.slice(next + 0, next + 30)} />
                    </div>
                </div>
            </div>
        )

    if (small)
        return (
            <div className={styles.ordersMobile}>
                <div className={commonStyles.dividerMobile} />
                <div className={styles.ordersWrapper}>
                    <Order data={data.slice(next + 0, next + 30)} />
                </div>
            </div>
        )

    if (medium)
        return (
            <div className={styles.orders}>
                <div className={styles.ordersWrapper}>
                    <Order data={data.slice(next + 0, next + 15)} />
                </div>
                <div className={styles.ordersWrapper}>
                    <Order data={data.slice(next + 15, next + 30)} />
                </div>
            </div>
        )

    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next, next + 10)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 10, next + 20)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 20, next + 30)} />
            </div>
        </div>
    )
}

/**
 * seo를 높이기 위해서 css에 display none을 한 다음 검색 결과로 데이터를 받아올 수 있게끔만 하고
 * 실제 브라우저로 들어온 사용자에게는 노출하지 않는 방식으로 대응해봤는데 나쁘지 않은듯.
 */
