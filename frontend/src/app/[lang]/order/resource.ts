import { oneMobileOTFRegular, oneMobilePop, oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const styles = {
    /** Layout */

    /** Page */
    orders: 'w-full flex gap-4',
    ordersWrapper: 'flex flex-col flex-1 gap-4',

    /** Mobile Page */
    ordersMobile: 'w-full flex flex-col gap-4 px-4',

    /** Order */
    noContents: `${oneMobilePopOTF.className} dark:text-slate-200 h-auto flex justify-center items-center text-base1 text-slate-800`,
    orderWrapper:
        'dark:hover:bg-gray-600 dark:active:bg-gray-700 dark:bg-gray-700 hover:bg-gray-100 active:bg-gray-200 flex w-full h-fit cursor-pointer select-none flex-col gap-1 p-4 transition shadow-order rounded-[4px]',
    orderTitleWrapper: 'flex items-center gap-4 text-base3',
    orderTitle: `dark:text-slate-200 text-base2 font-[600] mb-[4px] leading-[1.5rem]`,
    orderContents: `dark:text-slate-200 text-base0`,
    orderEmail: `dark:text-slate-200 text-base0 text-slate-800`,

    /** Icons */
    thumbUp: 'h-3 w-3 text-lime-500',
    thumbDown: 'h-3 w-3 text-red-500'
}
