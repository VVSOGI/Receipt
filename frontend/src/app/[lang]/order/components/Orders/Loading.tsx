import React from 'react'
import { Mobile } from '..'
import { OrderType } from '@/types/tickets'

interface Props {
    data: OrderType[]
    next: number
}

export function Loading({ data, next }: Props) {
    return (
        <>
            <div className="hidden">
                <Mobile data={data} next={next} />
            </div>
        </>
    )
}
