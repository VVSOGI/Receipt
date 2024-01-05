import { HeaderLocales } from '@/types/locales'
import { atom } from 'recoil'

export const headerLocalesState = atom({
    key: 'headerLocalesState',
    default: undefined as HeaderLocales | undefined
})
