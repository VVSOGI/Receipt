export function getPaginationOrder(chapter: number, total: number) {
    const length = Math.ceil(total / 30)
    const pages = Array.from({ length }, (_, i) => i + 1)

    return pages.slice(chapter * 5, 5 * (chapter + 1))
}

export function getPaginationNextPrev(chapter: number) {
    const nextPage = chapter * 5 + 6
    const prevPage = (chapter - 1) * 5 + 5

    return { nextPage, prevPage }
}

export function isCanPrev(chapter: number) {
    return chapter > 0
}

export function isCanNext(chapter: number, total: number) {
    return 150 * (chapter + 1) < total
}
