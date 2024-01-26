export function getPaginationOrder(page: number) {
    const pagination = Math.floor((Number(page) - 1) / 5) * 5 + 1
    const pages = Array.from({ length: 5 }, (_, i) => pagination + i)

    return pages
}

export function getPaginationNextPrev(page: number) {
    const currentPage = page % 5 !== 0 ? Math.floor(page / 5) : Math.floor((page - 1) / 5)

    const nextPage = currentPage * 5 + 6
    const prevPage = (currentPage - 1) * 5 + 5

    return { nextPage, prevPage }
}
