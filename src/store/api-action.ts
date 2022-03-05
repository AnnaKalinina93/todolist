import { APIRoute } from "../const";
import { ThunkActionResult } from "../types/action";
import { Data } from "../types/data";
import { dataFailed, dataRequest, dataSucceeded } from "./action";

export const fetchDataAction = (): ThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    dispatch(dataRequest());
    try {
      const { data } = await api.get<Data[]>(APIRoute.Data);
      dispatch(dataSucceeded(data));
    } catch {
      dispatch(dataFailed());
    }
  };
