import { Animal } from './animal';
import { Chore } from './chore';

export interface Zookeeper {
    animalList: Animal[];
    chorelist: Chore[];
    resources: number;
}
