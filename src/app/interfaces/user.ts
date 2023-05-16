import { Favorite } from "./favorite";

export interface User {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    favorites?: Favorite[];
    __v?: number;
}