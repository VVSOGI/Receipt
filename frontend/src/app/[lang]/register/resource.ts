import { oneMobileTitleOTF } from '@/fonts'

export const styles = {
    /** Login */
    loginWrapper: 'dark:bg-dark-bg-title flex w-[450px] h-[500px] rounded-lg overflow-hidden border border-gray-200',
    imageSection: 'flex-4 flex items-center justify-center max-lg:hidden',
    image: 'h-1/2 w-1/2 object-contain',

    loginSection: 'flex-1.5 flex flex-col justify-center p-4 px-16',
    loginTitle: `${oneMobileTitleOTF.className} text-base3 font-bold mb-4`,
    inputWrapper: 'mb-2',
    input: 'dark:bg-gray-100 border border-gray-200 block w-full rounded-md px-4 py-3 text-gray-900 focus-visible:outline-none text-base0',

    buttonsWrapper: 'flex flex-col gap-2 mt-2',
    loginButton:
        'hover:bg-gray-100 active:bg-gray-200 px-4 py-3 bg-gray-500 text-white rounded-md border border-gray-200 text-base0 text-gray-800',
    registerButton: 'hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 px-4 py-3 rounded-md border border-gray-200 text-base0',

    /** oAuth */
    oauthWrapper: 'flex justify-center gap-8 mt-8',
    oauthButton:
        'dark:hover:bg-gray-200 dark:active:bg-gray-300 hover:bg-gray-100 active:bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-300 cursor-pointer select-none shadow-icon',
    oauthImage: 'object-cover h-3/4'
}
