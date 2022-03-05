import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import { Action } from 'redux';

export enum ActionType {
  DataSucceeded = 'todolist/dataSucceeded',
  DataRequest = 'todolist/dataRequest',
  DataFailed = 'todolist/dataFailed',
  DataAddition = 'todolist/dataAddition',
  DataDelete = 'todolist/dataDelete',
  DataChange = 'todolist/dataChange',
  RedirectToRoute = 'main/redirectToRoute',
  PaginationChange = 'todolist/paginationChange',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>