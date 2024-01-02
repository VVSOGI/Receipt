import { OrderType } from '@/types/tickets'
import React from 'react'
import { Order } from '..'
import { styles } from '../../resource'

interface Props {
    data: OrderType[]
    next: number
}

export function Mobile({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 0, next + 30)} />
            </div>
        </div>
    )
}
