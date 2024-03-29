'use client'

import { Locales, Pages } from '@/types/locales'

export function getLocales<T>(page: Pages, locale: Locales): Promise<T> {
    const data = require(`public/locales/${page}/${locale}.json`)

    return data
}
