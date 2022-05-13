import {configureStore,combineReducers} from '@reduxjs/toolkit'
import CartPricingSlice from './CartPricingSlice'
const rootReducer = combineReducers({cart:CartPricingSlice})
export const store = configureStore({
    reducer: rootReducer,
    middleware: [],
})