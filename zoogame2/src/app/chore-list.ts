import { Chore } from './models/chore';

export const chores: Chore[] = [
    {
        name: 'moan the grass',
        image: '../assets/grass.jfif',
        completionTime: 10000,
        complete: false
    },
    {
        name: 'clean the toilet',
        image: '../assets/toilet.jpg',
        completionTime: 20000,
        complete: false
    },
    {
        name: 'clean the cage',
        image: '../assets/zoocage.jpg',
        completionTime: 10000,
        complete: false
    }
]