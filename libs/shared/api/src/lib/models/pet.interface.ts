import { Id } from './id.type';
import { TypeOf } from './produtcts.interface';

export interface IPetCreate {
    name: string;
    breed: string;
    lastFed: string;
    energetic: boolean;
    imgUrl: string;
    sick: boolean;
}
export interface IPet extends IPetCreate {
    _id: Id;
}
export interface IPetUpdate extends Partial<IPet> {
    _id: Id;
}
