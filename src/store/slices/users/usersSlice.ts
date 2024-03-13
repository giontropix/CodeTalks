import { createSelector, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../types';
import { requestGetUsers } from './sideEffects';
import { RootState } from '../../configureStore';

type InitialState = {
  users: User[];
};

const initialState: InitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: { ...initialState },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestGetUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {
  reducer: usersReducer,
  actions: { setUsers },
} = usersSlice;

export const selectUsers = createSelector(
  (state: RootState) => state,
  (state) => state.users.users
);
