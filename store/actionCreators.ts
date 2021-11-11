import { actionType } from "./actions/mealsActions";
import { IFilters } from "../interfaces/filters";

export const toggleFavorites = (mealId: string) => ({
  type: actionType.TOGGLE_FAVORITES,
  payload: mealId,
});
export const setFilters = (filterSettings: IFilters) => ({
  type: actionType.SET_FILTERS,
  payload: filterSettings,
});

export const actionCreators = toggleFavorites;
