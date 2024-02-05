'use client'

import { OrderType } from '@/types/tickets'
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { styles } from '../../resource'
import Link from 'next/link'

interface Props {
    data: OrderType[]
}

export function Paper({ data }: Props) {
    if (!data.length) return <div className={styles.noContents}>No orders</div>

    return data.map((order: OrderType) => (
        <Link href={order.commitUrl} key={order.id} className={styles.orderWrapper}>
            <div>
                <div className={styles.orderTitleWrapper}>
                    <div className={styles.orderTitle}>{order.title}</div>
                    <div>
                        {order.priority === 'high' ? (
                            <HandThumbUpIcon className={styles.thumbUp} />
                        ) : (
                            <HandThumbDownIcon className={styles.thumbDown} />
                        )}
                    </div>
                </div>
                <div className={styles.orderContents}>{order.description}</div>
            </div>
            <div className={styles.orderEmail}>{order.email}</div>
        </Link>
    ))
}
