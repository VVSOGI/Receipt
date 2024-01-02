import { OrderType } from '@/types/tickets'
import React, { createContext, useState } from 'react'

export interface OrdersContext {
    data: OrderType[]
    setData: React.Dispatch<React.SetStateAction<OrderType[]>>
}

const OrdersContext = createContext<OrdersContext | null>(null)

export function OrdersProvider({ children }: { children: React.ReactElement }) {
    const [data, setData] = useState<OrderType[]>([])

    return <OrdersContext.Provider value={{ data, setData }}>{children}</OrdersContext.Provider>
}

export default OrdersContext
