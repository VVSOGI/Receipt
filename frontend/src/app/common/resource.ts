import { oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const commonStyles = {
    /** Layout */
    screen: 'h-auto',
    section: 'h-full min-h-[100vh] container flex gap-8 mb-[160px]', // 10rem to 160px

    /** Page */
    divider: 'mb-[64px] border-t border-t-gray-200', // 4rem to 64px
    title: `${oneMobileTitleOTF.className} mb-6 text-base4 font-bold`, // no rem change

    /** Header */
    headerWrapper: 'py-6', // no rem change
    navbar: 'container flex items-center justify-between',
    listWrapper: 'flex gap-6', // no rem change
    list: 'flex gap-12', // no rem change
    listItem: `dark:text-[#239c62] ${oneMobilePopOTF.className}`,

    /** Footer */
    footerWrapper: 'flex h-[160px] items-center justify-center border-t border-t-gray-200 p-[148px] py-6', // 10rem to 160px, 9.25rem to 148px
    footerContents: 'hover:text-red-500 text-3xl w-fit cursor-pointer select-none font-bold transition',

    /** ThemeButton */
    themeButton: `hover:bg-zinc-100 active:bg-gray-200 dark:hover:bg-zinc-700 dark:active:bg-gray-900 ${oneMobilePopOTF.className} flex items-center justify-center rounded-lg p-2 transition-colors dark:text-[#239c62] user-select`, // no rem change

    /** Icons */
    sunIcon: 'h-5 w-5 text-[#239c62]', // no rem change
    moonIcon: 'h-5 w-5 text-[#202026]' // no rem change
}
