'use client'

import { LogType } from '@/types/logs'
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { styles } from '../../resource'
import Link from 'next/link'

interface Props {
    data: LogType[]
}

export function Paper({ data }: Props) {
    if (!data.length) return <div className={styles.noContents}>Empty</div>

    return data.map((log: LogType) => (
        <Link href={`/log/${log.id}`} key={log.id} className={styles.orderWrapper}>
            <div>
                <div className={styles.orderTitleWrapper}>
                    <div className={styles.orderTitle}>{log.title}</div>
                    <div>
                        {log.priority === 'high' ? (
                            <HandThumbUpIcon className={styles.thumbUp} />
                        ) : (
                            <HandThumbDownIcon className={styles.thumbDown} />
                        )}
                    </div>
                </div>
                <div className={styles.orderContents}>{log.description}</div>
            </div>
            <div className={styles.orderEmail}>{log.email}</div>
        </Link>
    ))
}
