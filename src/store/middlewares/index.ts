import { Tuple } from '@reduxjs/toolkit';
import { rtkQueryApis } from '../rtkQuery/getRtkQueryApis';
import { usersReducer } from '../slices/users/slices/usersSlice';

export default new Tuple(rtkQueryApis.middleware);
