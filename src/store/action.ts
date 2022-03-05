import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Data } from '../types/data';

export const dataSucceeded = createAction(
    ActionType.DataSucceeded,
    (data: Data[]) => ({
      payload: data,
    }),
  );
  
  export const dataRequest = createAction(ActionType.DataRequest);
  
  export const dataFailed = createAction(ActionType.DataFailed);

  export const dataAddition = createAction(
  ActionType.DataAddition,
  (data: Data) => ({
    payload: data,
  }),
);

export const dataRemoval = createAction(
    ActionType.DataDelete,
    (data: Data) => ({
      payload: data,
    }),
  );
  
export const dataChange = createAction(
    ActionType.DataChange,
    (data: Data) => ({
      payload: data,
    }),
  );

  export const activePageChange = createAction(
    ActionType.PaginationChange,
    (page: number) => ({
      payload: page,
    }),
  );