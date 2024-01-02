import { OrderType } from '@/types/tickets'
import React from 'react'
import { styles } from '../../resource'
import { Order } from '..'

interface Props {
    data: OrderType[]
    next: number
}

export function Tablet({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 5, next + 15)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 15, next + 30)} />
            </div>
        </div>
    )
}
