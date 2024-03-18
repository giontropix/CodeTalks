import { User } from '../../../types';
import { rtkQueryApis } from '../getRtkQueryApis';

type GetUsersProps = {
  companyId?: string;
};

export const usersApis = rtkQueryApis.injectEndpoints({
  endpoints: (build) => ({
    // useGetUsersQuery - useLazyGetUsersQuery
    getUsers: build.query<User[], GetUsersProps>({
      query: ({ companyId }) => ({
        url: `${companyId ? `${companyId}/` : ''}users`,
        method: 'get',
      }),
      providesTags: ['USERS'],
      transformResponse: (response: User[]) => response,
    }),
    addUser: build.mutation<void, User>({
      // useAddUserMutation
      query: ({ name, email, framework }) => ({
        url: 'users',
        method: 'post',
        body: JSON.stringify({ name: name.toUpperCase(), email, framework }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: (_, error, ___) => (error ? [] : ['USERS']),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery, useAddUserMutation } = usersApis;
