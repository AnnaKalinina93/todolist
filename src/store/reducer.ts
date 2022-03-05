   import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { activePageChange, dataAddition, dataChange, dataFailed, dataRemoval, dataRequest, dataSucceeded } from './action';
const initialState: State = {
    data: [],
    dataLoading: false,
    dataError: false,
    activePage: 1,
}

export const reducer = createReducer(initialState, (builder) => {
    builder
  
      .addCase(dataRequest, (state) => {
        state.dataLoading= true;
      })
  
      .addCase(dataSucceeded, (state, action) => {
        state.dataLoading = false;
        state.data = action.payload;
      })

      .addCase(dataFailed, (state) => {
        state.dataError= true;
        state.dataLoading= false;
      })

      .addCase(dataAddition, (state, action) => {
        const data = state.data.slice();
        state.data = [...data, action.payload];
      })

      .addCase(dataRemoval, (state, action) => {
        const data = state.data.slice();
        const indexSearch = data.findIndex((item)=> item.id === action.payload.id);
        data.splice(indexSearch,1);
        state.data = data;
      })

      .addCase(dataChange, (state, action) => {
        const data = state.data.slice();
        const indexSearch = data.findIndex((item)=> item.id === action.payload.id);
        state.data = [...data.slice(0,indexSearch), action.payload, ...data.slice(indexSearch+1)]
      })

      .addCase(activePageChange, (state, action) => {
        state.activePage = action.payload;
      });
    })