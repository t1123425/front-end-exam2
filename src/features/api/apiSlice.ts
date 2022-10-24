import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {pagesData, searchData} from '../../dataType';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: builder => ({
    getTags: builder.query({
      query: () => '/api/tags',
    }),
    getFriends: builder.query<pagesData, number>({
      query: pageSize => `/api/users/friends?page=1&pageSize=${pageSize}`,
    }),
    getAllData: builder.query<pagesData, searchData>({
      query: data =>
        `/api/users/all?page=${data.page}&pageSize=${data.pageSize}${
          data.keyword ? '&keyword=' + data.keyword : ''
        }`,
    }),
  }),
});

export const {useGetTagsQuery, useGetFriendsQuery, useGetAllDataQuery} =
  apiSlice;
