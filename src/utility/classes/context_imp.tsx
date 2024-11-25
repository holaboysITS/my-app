import {createContext, useContext} from 'react';
import { Impianto } from '../classes/impianto';

export type TContesto = {
    data: Impianto[] | undefined
    setData: (args: Impianto[]) => void
}

export const Contesto = createContext<TContesto | undefined>(undefined)