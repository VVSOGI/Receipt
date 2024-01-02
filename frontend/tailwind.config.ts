import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        colors: {
            primary: '#60d29b',
            'bg-title': '#e4e4eb',
            'zinc-100': '#f4f4f5',
            'zinc-700': '#3f3f46',
            'gray-100': '#f4f4f5',
            'gray-200': '#e4e4e7',
            'gray-600': '#52525b',
            'gray-700': '#3f3f46',
            'gray-900': '#202026',
            'slate-200': '#e2e8f0',
            'slate-600': '#475569',
            'slate-800': '#1e293b',
            'lime-500': '#84cc16',
            'red-500': '#ef4444',

            dark: {
                primary: '#239c62',
                'bg-title': '#239c6280'
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
            base5: '1.5rem'
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
                default: '0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1)',
                icon: '0 0 0.25rem 0 rgba(0, 0, 0, 0.2)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: []
}
export default config
