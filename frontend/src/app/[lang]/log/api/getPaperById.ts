export default async function getPaperById(id: string) {
    const data = await fetch(`${process.env.NODE_BACKEND_URL}/boards/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    })

    if (!data.ok) {
        throw new Error(
            JSON.stringify({
                message: data.statusText,
                statusCode: data.status
            })
        )
    }

    return data.json()
}
