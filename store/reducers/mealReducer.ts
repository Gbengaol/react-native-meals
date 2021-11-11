import { DUMMY_MEALS } from "../../data/dummy-data";
import { Action, actionType } from "../actions/mealsActions";
import { IMeal } from "../../interfaces/meal";

interface IState {
  meals: Array<IMeal>;
  filteredMeals: Array<IMeal>;
  favoriteMeals: Array<IMeal>;
}

const initialState: IState = {
  meals: DUMMY_MEALS,
  filteredMeals: DUMMY_MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case actionType.TOGGLE_FAVORITES:
      const isInArray = state.favoriteMeals.some((meal: IMeal) => {
        return meal.id === action.payload;
      });
      if (isInArray) {
        const newArray = state.favoriteMeals.filter(
          (meal: IMeal) => meal.id !== action.payload
        );
        return {
          ...state,
          favoriteMeals: newArray,
        };
      } else {
        const newFavMeal = state.meals.find(
          (meal: IMeal) => meal.id === action.payload
        );
        if (newFavMeal) {
          return {
            ...state,
            favoriteMeals: [...state.favoriteMeals, newFavMeal],
          };
        } else {
          return state;
        }
      }

    case actionType.SET_FILTERS:
      const { isVegan, isVegetarian, isLactoseFree, isGluttenFree } =
        action.payload;

      const filteredMeals = state.meals.filter((meal) => {
        if (isGluttenFree && !meal.isGluttenFree) {
          return false;
        }
        if (isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
