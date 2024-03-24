import { oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

const container = 'md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-4'

export const commonStyles = {
    /** Layout */
    screen: `h-auto`,
    section: `${container} h-full min-h-[100vh] flex gap-8 mb-[32px]`,

    /** Page */
    title: `${oneMobileTitleOTF.className} mb-6 text-base4 font-bold`,

    /** Divider */
    divider: `mb-[64px] border-t border-t-gray-200`,

    /** Header */
    headerWrapper: `${container} py-6`,
    navbar: `flex items-center justify-between`,
    listWrapper: `flex gap-6`,
    list: `flex gap-8`,
    listItem: `dark:text-[#239c62] ${oneMobilePopOTF.className}`,
    listRightWrapper: `flex items-center gap-4`,

    /** Mobile Header */
    headerWrapperMobile: `${container} py-4`,
    listMobile: `flex gap-8`,

    /** Footer */
    footerWrapper: `h-full flex flex-col ${container}`,
    footerContents: `dark:border-gray-700 
        w-fit flex flex-col my-[32px] gap-[8px] select-none font-bold transition text-[14px]`,

    /** ThemeButton */
    themeButton: `hover:bg-zinc-100
    active:bg-gray-200
    dark:hover:bg-zinc-700 dark:active:bg-gray-900 dark:text-[#239c62]
    ${oneMobilePopOTF.className} flex items-center justify-center rounded-lg p-2 transition-colors user-select cursor-pointer
    select-none duration-0`,

    /** ThemeButton */
    profileButton: `hover:bg-zinc-100
    active:bg-gray-200
    dark:hover:bg-zinc-700 dark:active:bg-gray-900 dark:text-[#239c62]
    ${oneMobilePopOTF.className} flex items-center justify-center rounded-lg p-2 transition-colors user-select cursor-pointer`,

    /** Icons */
    sunIcon: `h-5 w-5 text-[#239c62]`,
    moonIcon: `h-5 w-5 text-[#202026]`
}
