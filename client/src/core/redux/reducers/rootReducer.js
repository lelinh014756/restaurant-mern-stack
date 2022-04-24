import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authCustomerReducer from './authCustomerReducer';

const rootReducer = combineReducers({
    product: productReducer,
    customer: authCustomerReducer
})

export default rootReducer;