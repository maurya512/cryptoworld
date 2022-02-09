// ! store is a single point of truth in a javascript application 
// ! it holds the complete state tree of your app. There should only be a single store in your app. 
import { configureStore } from '@reduxjs/toolkit';

// ! importing api 
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/newsApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    }
});