import { configureStore } from '@reduxjs/toolkit';
import middlewares from './middlewares';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export default store;

// optional, but required for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
