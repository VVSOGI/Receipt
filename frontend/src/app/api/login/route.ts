import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { email, password } = (await req.json()) as { email: string; password: string }
    try {
        const { data } = await axios.post(`${process.env.NODE_BACKEND_URL}/auth/login`, {
            email,
            password
        })

        return NextResponse.json(data)
    } catch (err: any) {
        return NextResponse.json({ message: err.response.data.message }, { status: err.response.data.statusCode })
    }
}
