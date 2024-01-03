import Link from 'next/link'
import { ThemeButton, commonStyles } from '.'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.listItem} href={`/${locale}/home`}>
                            홈
                        </Link>
                        <Link className={commonStyles.listItem} href={`/${locale}/order`}>
                            영수증
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <ThemeButton />
                    <Link className={commonStyles.themeButton} href={`/${locale}/login`}>
                        로그인
                    </Link>
                </div>
            </nav>
        </header>
    )
}
