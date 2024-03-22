import React from 'react'
import { commonStyles } from './resource'
import Link from 'next/link'
import { oneMobilePopOTF } from '@/fonts'

export default function Footer() {
    return (
        <footer className={commonStyles.footerWrapper}>
            <div className="w-full border-t border-dashed border-gray-200" />
            <div className={commonStyles.footerContents}>
                <Link
                    className={`
                        ${oneMobilePopOTF.className}
                        hover:text-primary
                    `}
                    href=""
                >
                    GITHUB
                </Link>
            </div>
        </footer>
    )
}
