import { oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const commonStyles = {
    /** Layout */
    screen: 'h-auto',
    section: 'h-full min-h-[100vh] container flex gap-8 mb-[160px]',

    /** Page */
    title: `${oneMobileTitleOTF.className} mb-6 text-base4 font-bold`,

    /** Divider */
    divider: 'mb-[64px] border-t border-t-gray-200',
    dividerMobile: 'mb-[32px] border-t border-t-gray-200',

    /** Header */
    headerWrapper: 'container py-6',
    navbar: 'flex items-center justify-between',
    listWrapper: 'flex gap-6',
    list: 'flex gap-8',
    listItem: `dark:text-[#239c62] ${oneMobilePopOTF.className}`,
    listRightWrapper: `flex items-center gap-4`,

    /** Mobile Header */
    headerWrapperMobile: 'container py-4 px-4',
    listMobile: 'flex gap-8',

    /** Footer */
    footerWrapper: 'flex h-[160px] items-center justify-center border-t border-t-gray-200 p-[148px] py-6',
    footerContents: 'hover:text-red-500 text-3xl w-fit cursor-pointer select-none font-bold transition',

    /** ThemeButton */
    themeButton: `hover:bg-zinc-100
    active:bg-gray-200
    dark:hover:bg-zinc-700 dark:active:bg-gray-900 dark:text-[#239c62]
    ${oneMobilePopOTF.className} flex items-center justify-center rounded-lg p-2 transition-colors user-select cursor-pointer`,

    /** ThemeButton */
    profileButton: `hover:bg-zinc-100
    active:bg-gray-200
    dark:hover:bg-zinc-700 dark:active:bg-gray-900 dark:text-[#239c62]
    ${oneMobilePopOTF.className} flex items-center justify-center rounded-lg p-2 transition-colors user-select cursor-pointer`,

    /** Icons */
    sunIcon: 'h-5 w-5 text-[#239c62]',
    moonIcon: 'h-5 w-5 text-[#202026]'
}
