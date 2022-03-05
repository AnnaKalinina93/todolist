import { Data } from "./data";

export type State = {
  dataLoading: boolean,
  dataError: boolean,
  data: Data[],
  activePage: number,
}