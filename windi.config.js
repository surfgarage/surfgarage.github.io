import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        extend: {
            screens: {
                'md': '768px',
                'lg': '1024px',
            },
            colors: {
                transparent: 'transparent',
                'amber': '#ba8723',
                'yellow': '#E9C465',
                'blue': '#1A304E',
                'red': '#6B1F15',
                'white': '#fff',
                'black': '#000',
                'grey': '#d7d7d7',
                'light-grey': '#fafafa'
            },
            spacing: {
                '1': '1rem',
                '2': '2rem',
                '3': '3rem',
                '4': '4rem',
                '5': '5rem',
                '6': '6rem',
                '7': '7rem',
                '8': '8rem',
                '9': '9rem',
                '10': '10rem',

            }
        }
    }
})