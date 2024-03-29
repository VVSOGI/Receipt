'use client'

import React, { useEffect, useState } from 'react'
import { LogType } from '@/types/logs'
import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import { Paper } from '..'
import { useRecoilValue } from 'recoil'
import { languageState } from '@/store/languageState'
import { styles } from '../../resource'
import { commonStyles } from '@/app/common'

interface Props {
    data: LogType[]
    total: number
}

export function Papers({ data, total }: Props) {
    const { small, medium } = useResponsiveScreen()
    const [loading, setLoading] = useState(false)
    const [papers, setPapers] = useState<LogType[]>([])
    const language = useRecoilValue(languageState)

    useEffect(() => {
        if (language) setLoading(true)
    }, [language])

    useEffect(() => {
        setPapers(data)
    }, [data])

    if (!loading)
        return (
            <div className="hidden">
                <div className={styles.ordersMobile}>
                    <div />
                    <div className={styles.ordersWrapper}>
                        <Paper data={data.slice(0, 30)} />
                    </div>
                </div>
            </div>
        )

    if (small)
        return (
            <div className={styles.ordersMobile}>
                <div />
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(0, 30)} />
                </div>
            </div>
        )

    if (medium)
        return (
            <div className={styles.orders}>
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(0, 15)} />
                </div>
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(15, 30)} />
                </div>
            </div>
        )

    return (
        <div>
            <div className={styles.orders}>
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(0, 10)} />
                </div>
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(10, 20)} />
                </div>
                <div className={styles.ordersWrapper}>
                    <Paper data={papers.slice(20, 30)} />
                </div>
            </div>
        </div>
    )
}
