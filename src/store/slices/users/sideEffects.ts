import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../types';
import { AppState } from '../../rootReducer';
import { addUser, getUsers } from '../../../services/users';

export const requestGetUsers = createAsyncThunk<User[], void, { state: AppState }>(
  'users/requestGetUsers',
  async () => {
    const result = await getUsers();
    return result;
  }
);

export const requestAddUser = createAsyncThunk<void, User, { state: AppState }>(
  'users/requestAddUser',
  async (user) => {
    await addUser(user);
  }
);
