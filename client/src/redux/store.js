import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
// import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import { version } from 'mongoose';
// import { theme } from 'flowbite-react';

const rootReducer = combineReducers({
    user: userReducer,
    // theme: themeReducer,
});

const persistConfig = {
    key: rootReducer,
    storage,
    version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;