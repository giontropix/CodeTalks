import { User } from '../../../types';
import { rtkQueryApis } from '../getRtkQueryApis';

export const usersApis = rtkQueryApis.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: 'users',
        method: 'get',
      }),
      providesTags: ['USERS'],
    }),
    addUser: build.mutation<void, User>({
      query: ({ name, email, framework }) => ({
        url: 'users',
        method: 'post',
        body: JSON.stringify({ name: name.toUpperCase(), email, framework }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['USERS'],
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery, useAddUserMutation } = usersApis;
