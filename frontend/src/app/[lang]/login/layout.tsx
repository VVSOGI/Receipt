import React from 'react'
import { Locales } from '@/types/locales'
import { styles } from './resource'
import { Footer, Header } from '@/app/common'

export default function layout({ children, params }: { children: React.ReactNode; params: { lang: Locales } }) {
    const locale = params.lang
    return (
        <div>
            <main className={styles.screen}>
                <Header locale={locale} />
                <section className={styles.section}>{children}</section>
            </main>
            <Footer />
        </div>
    )
}
