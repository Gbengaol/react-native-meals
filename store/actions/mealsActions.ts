import { IFilters } from "../../interfaces/filters";

export enum actionType {
  TOGGLE_FAVORITES = "TOGGLE_FAVORITES",
  SET_FILTERS = "SET_FILTERS",
}

export interface toggleFavorites {
  type: actionType.TOGGLE_FAVORITES;
  payload: string;
}

export interface setFilters {
  type: actionType.SET_FILTERS;
  payload: IFilters;
}

export type Action = toggleFavorites | setFilters;
