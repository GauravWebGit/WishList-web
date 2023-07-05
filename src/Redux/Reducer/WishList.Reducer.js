import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST } from "../ActionType";

const initVal = {
  item: [],
};

const removeItem = (array, action) => {
  return array.filter((items, index) => items.id !== action.payload);
};

export const WishlistReducer = (state = initVal, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        item: [...state.item, { ...action.payload }],
      };

    case REMOVE_TO_WISHLIST:
      return {
        ...state,
        item: removeItem(state.item, action),
      };

    default:
      return state;
  }
};
