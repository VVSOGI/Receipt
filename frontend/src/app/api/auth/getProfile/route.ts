import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const token = req.headers.get('authorization')
    try {
        const { data } = await axios.get(`${process.env.NODE_BACKEND_URL}/auth/profile`, {
            headers: {
                Authorization: token
            }
        })

        return NextResponse.json(data)
    } catch (error: any) {
        return NextResponse.json({ error: error.response.data.message }, { status: error.response.data.statusCode })
    }
}
