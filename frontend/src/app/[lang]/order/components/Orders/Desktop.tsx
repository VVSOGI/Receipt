'use client'

import React from 'react'
import { styles } from '../../resource'
import { Order } from '..'
import { OrderType } from '@/types/tickets'

interface Props {
    data: OrderType[]
    next: number
}

export function Desktop({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next, next + 5)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 5, next + 10)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 10, next + 15)} />
            </div>
        </div>
    )
}
