import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const editorId = req.nextUrl.searchParams.get('editorId')

    const res = await fetch(`http://localhost:4000/editor?editorId=${editorId}`, {
        method: 'GET'
    })

    const contents = await res.json()

    return NextResponse.json(contents)
}

export async function POST(req: NextRequest) {
    const { contents } = await req.json()

    const res = await fetch('http://localhost:4000/editor/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents
        })
    })

    if (!res.ok) {
        throw new Error(await res.text())
    }

    return NextResponse.json('editor')
}
