import * as types from "../types/authType";

const initState = {
  customers: {
    signup: [],
    signin: [],
  },
  SignIn: {},
  loading: {
    signup: false,
    signin: false,
  },
  message: {
    signup: {
      success: "",
      error: "",
    },
    signin: {
      error: "",
    },
  },
};

const authCustomerReducer = (state = initState, action) => {
  const newCustomers = {...state.customers};
  switch (action.type) {
    case types.CUSTOMER_SIGNUP_REQUESTING:
      return {
        ...state,
        loading: {
          ...state.loading,
          signup: true,
        },
      };
    case types.CUSTOMER_SIGNIN_REQUESTING:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: true,
        },
      };
    case types.CUSTOMER_SIGNUP_SUCCESS:
      newCustomers.signup.push(action.payload);
      return {
        ...state,
        loading: {
          ...state.loading,
          signup: false,
        },
        customers: newCustomers,
        message: {
          ...state.message,
          signup: {
            ...state.message.signup,
            success: "Đăng ký tài khoản thành công",
            error: "",
          },
        },
      };
    case types.CUSTOMER_SIGNIN_SUCCESS:
      newCustomers.signin.push(action.payload);
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: false,
        },
        customers: newCustomers,
        message: {
          ...state.message,
          signin: {
            ...state.message.signin,
            error: "",
          },
        },
      };
    case types.CUSTOMER_SIGNUP_FAILED:
      return {
        ...state,
        loading: {
          ...state.loading,
          signup: false,
        },
        message: {
          ...state.message,
          signup: {
            ...state.message.signup,
            success: "",
            error: action.payload,
          },
        },
      };
    case types.CUSTOMER_SIGNIN_FAILED:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: false,
        },
        message: {
          ...state.message,
          signin: {
            ...state.message.signin,
            error: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default authCustomerReducer;
