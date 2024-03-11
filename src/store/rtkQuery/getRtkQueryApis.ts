import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants';

const tagTypes = ['USERS'] as const;

export type RTKTagTypes = (typeof tagTypes)[number];

export const LONG_CACHE_TIME = 60 * 60 * 24; // 24h
export const DEFAULT_CACHE_TIME = 60 * 4; // 4m

export const rtkQueryApis = createApi({
  reducerPath: 'rtkQueryApis',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: DEFAULT_CACHE_TIME,
  tagTypes,
  endpoints: () => ({}),
});
