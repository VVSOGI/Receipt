import React from 'react'
import { Locales } from '@/types/locales'
import { commonStyles } from '@/app/common/resource'
import Header from '@/app/common/Header'
import Footer from '@/app/common/Footer'

export default function layout({ children, params }: { children: React.ReactNode; params: { lang: Locales } }) {
    const locale = params.lang

    return (
        <div>
            <main className={commonStyles.screen}>
                <Header locale={locale} />
                <section className={commonStyles.section}>{children}</section>
            </main>
            <Footer />
        </div>
    )
}
