import { combineReducers } from '@reduxjs/toolkit';
import { rtkQueryApis } from './rtkQuery/getRtkQueryApis';
import { usersReducer } from './slices/users/slices/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  [rtkQueryApis.reducerPath]: rtkQueryApis.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
