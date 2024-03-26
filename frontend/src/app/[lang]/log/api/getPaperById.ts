export default async function getPaperById(id: string) {
    const data = await fetch(`${process.env.NODE_BACKEND_URL}/boards/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    })

    if (!data.ok) {
        const { message, statusCode } = await data.json()
        throw new Error(
            JSON.stringify({
                message,
                statusCode
            })
        )
    }

    return data.json()
}
