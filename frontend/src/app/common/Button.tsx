import { oneMobileOTFRegular, oneMobilePopOTF } from '@/fonts'
import React from 'react'

interface Props {
    text: string
    mainBgColor?: string
    subBgColor?: string
    onClick: () => void
}

export default function Button({ text, mainBgColor = '#232323', subBgColor = '#5b5b5bec', onClick }: Props) {
    const animateButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const circleElement = document.getElementById(text)
        if (circleElement) {
            circleElement.style.left = `${e.clientX - rect.x}px`
            circleElement.style.top = `${e.clientY - rect.y}px`
            circleElement.style.transform = 'scale(150)'
            circleElement.style.backgroundColor = subBgColor
            const time = setTimeout(() => {
                circleElement.style.backgroundColor = mainBgColor
                circleElement.style.transform = 'scale(500)'
            }, 500)

            return () => {
                clearTimeout(time)
            }
        }
    }

    return (
        <button
            onClick={(e) => {
                animateButton(e)
                onClick()
            }}
            style={{
                backgroundColor: mainBgColor
            }}
            className={`dark:hover:bg-gray-600 dark:bg-zinc-700 hover:bg-gray-600 dark:text-gray-900 relative mt-[16px] py-[16px] px-[64px] font-[700] text-white rounded-[4px] shadow-button overflow-hidden`}
        >
            <div className={`relative ${oneMobilePopOTF.className}  z-50 text-white`}>{text}</div>
            <div
                id={text}
                style={{
                    width: '1px',
                    height: '1px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: mainBgColor
                }}
                className={`absolute duration-500 rounded-full z-0`}
            />
        </button>
    )
}
