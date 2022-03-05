import { Data } from '../types/data';
import { State } from '../types/state';

export const getData = (state: State): Data[] => state.data;
export const getDataLoading  = (state: State): boolean => state.dataLoading;
export const getDataError= (state: State): boolean => state.dataError;
export const getActivePage= (state: State): number => state.activePage;