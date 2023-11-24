// store.js
import { createStore } from "redux";

// Action types
const TOGGLE_EDIT_ICON = "TOGGLE_EDIT_ICON";
const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
const SET_SELECTED_TAB = "SET_SELECTED_TAB";

// Action creators
export const toggleEditIcon = () => ({
  type: TOGGLE_EDIT_ICON,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setSelectedTab = (index) => ({
  type: SET_SELECTED_TAB,
  payload: index,
});

// Reducer
const initialState = {
  isEditIcon: localStorage.getItem("isEditIcon") === "true" ? true : false,
  selectedTab: localStorage.getItem("selectedTab") || 0,
  isDarkMode: localStorage.getItem("isDarkMode") === "true" ? true : false,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_ICON:
      localStorage.setItem("isEditIcon", !state.isEditIcon);
      return {
        ...state,
        isEditIcon: !state.isEditIcon,
      };
    case TOGGLE_DARK_MODE:
      localStorage.setItem("isDarkMode", !state.isDarkMode);
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case SET_SELECTED_TAB:
      localStorage.setItem("selectedTab", action.payload);
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
