import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

interface Props {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, { params: { id } }: Props) {
    try {
        const { data } = await axios.get(`${process.env.NODE_BACKEND_URL}/auth/refresh/${id}`, {
            headers: {
                Authorization: req.headers.get('authorization')
            }
        })

        return NextResponse.json(data)
    } catch (err: any) {
        console.log(err.response.data)
    }
}
