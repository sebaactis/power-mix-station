import { Mona_Sans } from 'next/font/google'

export const monaSans = Mona_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
    fallback: ['Comic Neue', 'Arial', 'sans-serif']
})