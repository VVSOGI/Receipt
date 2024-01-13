import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const token = req.headers.get('authorization')
    const { title, description } = await req.json()
    try {
        const { data } = await axios.post(
            `${process.env.NODE_BACKEND_URL}/boards`,
            {
                title,
                description,
                priority: 'high'
            },
            {
                headers: {
                    Authorization: token
                }
            }
        )

        return NextResponse.json(data)
    } catch (error: any) {
        console.log(error.response)
        return NextResponse.json({ error: error.response.data.message }, { status: error.response.data.statusCode })
    }
}
