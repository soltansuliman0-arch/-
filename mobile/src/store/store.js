import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import serviceReducer from './slices/serviceSlice';
import orderReducer from './slices/orderSlice';
import messageReducer from './slices/messageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
    orders: orderReducer,
    messages: messageReducer,
  },
});

export default store;
