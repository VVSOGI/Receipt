import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        colors: {
            primary: '#60d29b',
            'primary-hover': '#3ec082',
            white: '#fff',
            'bg-title': '#e4e4eb',
            'zinc-100': '#f4f4f5',
            'zinc-700': '#3f3f46',
            'gray-100': '#f4f4f5',
            'gray-200': '#e4e4e7',
            'gray-300': '#d4d4d8',
            'gray-400': '#a1a1aa',
            'gray-600': '#52525b',
            'gray-700': '#3f3f46',
            'gray-800': '#232323',
            'gray-900': '#202026',
            'slate-200': '#e2e8f0',
            'slate-600': '#475569',
            'slate-800': '#1e293b',
            'lime-500': '#84cc16',
            'red-500': '#ef4444',

            'downfull-blue': '#0e3296',
            'downfull-blue-100': '#4172ec',

            dark: {
                primary: '#239c62',
                'bg-default': '#202026',
                'bg-title': '#239c6280',
                'textarea-bg': '#767676'
            }
        },
        container: {
            center: true,
            padding: {
                md: '1.5rem',
                xl: '2rem'
            }
        },
        fontSize: {
            base0: '0.75rem',
            base1: '1rem',
            base2: '1.125rem',
            base3: '1.25rem',
            base4: '1.375rem',
            base5: '1.5rem',
            title: '3rem'
        },
        fontWeight: {
            base: '400',
            medium: '500',
            bold: '600',
            title: '700'
        },
        extend: {
            flex: {
                1: '1 1 0%',
                1.5: '1.5 1.5 0%',
                2: '2 2 0%',
                2.5: '2.5 2.5 0%',
                3: '3 3 0%',
                4: '4 4 0%'
            },
            boxShadow: {
                default: '0 0 4px rgba(0, 0, 0, 0.2)',
                order: '0 0 3px rgba(0, 0, 0, 0.2)',
                icon: '0 0 4px rgba(0, 0, 0, 0.2)',
                share: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                button: '0px 2px 4px rgba(0, 0, 0, 0.4)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
export default config
