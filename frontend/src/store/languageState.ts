import { Locales } from '@/types/locales'
import { atom } from 'recoil'

export const languageState = atom({
    key: 'languageState',
    default: undefined as Locales | undefined
})
