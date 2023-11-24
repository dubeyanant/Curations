// store.js
import { createStore } from "redux";

// Action types
const TOGGLE_EDIT_ICON = "TOGGLE_EDIT_ICON";

// Action creators
export const toggleEditIcon = () => ({
  type: TOGGLE_EDIT_ICON,
});

// Reducer
const initialState = {
  isEditIcon: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_ICON:
      return {
        ...state,
        isEditIcon: !state.isEditIcon,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
