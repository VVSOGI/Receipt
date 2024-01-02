import { oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const commonStyles = {
    /** Layout */
    screen: 'h-auto',
    section: 'h-full min-h-[100vh] container flex gap-8 mb-[10rem]',

    /** Page */
    divider: 'mb-[4rem] border-t border-t-gray-200',
    title: `${oneMobileTitleOTF.className} mb-6 text-base4 font-bold`,

    /** Header */
    headerWrapper: 'py-6',
    navbar: 'container flex items-center justify-between',
    listWrapper: 'flex gap-6',
    list: 'flex gap-12',
    listItem: `${oneMobilePopOTF.className} dark:text-[#239c62]`,

    /** Footer */
    footerWrapper: 'flex h-[10rem] items-center justify-center border-t border-t-gray-200 p-[9.25rem] py-6',
    footerContents: 'hover:text-red-500 text-3xl w-fit cursor-pointer select-none font-bold transition',

    /** ThemeButton */
    themeButton: 'hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center justify-center rounded-lg p-2 transition-colors',

    /** Icons */
    sunIcon: 'h-5 w-5 text-[#239c62]',
    moonIcon: 'h-5 w-5 text-[#202026]'
}
