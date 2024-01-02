import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { token } = (await req.json()) as { token: string }

    const data = await axios.post('https://vevv-test.vevv.io:3300/auth/google', {
        token: token
    })

    console.log(data.data)

    return NextResponse.json(data.data, {
        status: 200
    })
}
