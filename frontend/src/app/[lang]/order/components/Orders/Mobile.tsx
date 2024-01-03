import { OrderType } from '@/types/tickets'
import React from 'react'
import { Order } from '..'
import { styles } from '../../resource'
import { commonStyles } from '@/app/common/resource'

interface Props {
    data: OrderType[]
    next: number
}

export function Mobile({ data, next }: Props) {
    return (
        <div className={styles.ordersMobile}>
            <div className={commonStyles.dividerMobile} />
            <div className={styles.ordersWrapper}>
                <Order data={data.slice(next + 0, next + 30)} />
            </div>
        </div>
    )
}
