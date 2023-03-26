import axios from "axios";
import { ADD_USER, DELETE_USER, EDIT_USER, FETCH } from "./actiontypes";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("/get");
    console.log(response);
    return dispatch({
      type: FETCH,
      payload: response.data.users,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post("/add", newUser);
    return dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/delete/${id}`);
    return dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const editUser = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/update/${editedUser._id}`, editedUser);
    return dispatch({
      type: EDIT_USER,
      payload: editedUser,
    });
  } catch (error) {
    console.log(error);
  }
};
