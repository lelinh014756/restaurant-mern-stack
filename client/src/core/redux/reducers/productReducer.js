import * as types from "../types/productsType";

const initState = {
  products: [],
  productDetail: {},
  loading: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PRODUCTS_REQUESTING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;