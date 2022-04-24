import * as types from "../types/authType";
import api from "../../../api/auth";

export const signUpAction = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    dispatch({
      type: types.CUSTOMER_SIGNUP_REQUESTING,
    });
    api
      .post("/signup", data, config)
      .then((res) => {
        if (res) {
          dispatch({
            type: types.CUSTOMER_SIGNUP_SUCCESS,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: types.CUSTOMER_SIGNUP_FAILED,
          payload: err.response.data.errorMessage
        });
      });
  };
};

export const signInAction = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    dispatch({
      type: types.CUSTOMER_SIGNIN_REQUESTING,
    });
    api
      .post("/signin", data, config)
      .then((res) => {
        if (res) {
          dispatch({
            type: types.CUSTOMER_SIGNIN_SUCCESS,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: types.CUSTOMER_SIGNIN_FAILED,
          payload: err.response.data.errorMessage
        });
      });
  };
};
