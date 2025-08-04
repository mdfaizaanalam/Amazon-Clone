import { combineReducers } from 'redux';
import { getProductsReducers } from './Productreducers'; // Import your actual reducer

const rootReducers = combineReducers({
    getproductsdata: getProductsReducers, // Use the correct reducer name
    // Add more reducers as needed
});

export default rootReducers;
