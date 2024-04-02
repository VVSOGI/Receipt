import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { email, password, checkPassword } = (await req.json()) as { email: string; password: string; checkPassword: string }
    try {
        if (password !== checkPassword) return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 })

        const { data } = await axios.post(`${process.env.NODE_BACKEND_URL}/users/register`, {
            email,
            password
        })

        return NextResponse.json(data)
    } catch (err: any) {
        return NextResponse.json({ message: err.response.data.message }, { status: err.response.data.statusCode })
    }
}
