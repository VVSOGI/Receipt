import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { email, password, checkPassword } = (await req.json()) as { email: string; password: string; checkPassword: string }
}
