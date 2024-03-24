import { LogType } from '@/types/logs'
import axios from 'axios'

export const getPapers = async (page: number): Promise<LogType[] | any> => {
    try {
        const res = await axios.get(`${process.env.NODE_BACKEND_URL}/boards?page=${page}`)
        return res.data
    } catch (err: any) {
        if (err.cause?.code === 'ECONNREFUSED') {
            throw new Error(JSON.stringify({ message: 'Server is not working', statusCode: 500 }))
        }
        throw new Error(JSON.stringify({ message: err.response.data.message, statusCode: err.response.data.statusCode }))
    }
}
