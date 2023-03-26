import { ADD_USER, DELETE_USER, EDIT_USER, FETCH } from "./actiontypes";

const init = {
  data: null,
  loading: true,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((el) => el._id !== payload),
      };
    case EDIT_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    default:
      return state;
  }
};
export default reducer;
