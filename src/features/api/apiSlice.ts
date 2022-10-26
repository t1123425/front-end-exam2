import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {pagesData, searchData, tagsData} from '../../dataType';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: builder => ({
    getTags: builder.query<tagsData[], undefined>({
      query: () => '/api/tags',
    }),
    getFriends: builder.query<pagesData, searchData>({
      query: data =>
        `/api/users/friends?page=${data.page}&pageSize=${data.pageSize}`,
    }),
    getSearchData: builder.query<pagesData, searchData>({
      query: data =>
        `/api/users/all?page=${data.page}&pageSize=${data.pageSize}${
          data.keyword ? '&keyword=' + data.keyword : ''
        }`,
    }),
    getAllData: builder.query<pagesData, searchData>({
      query: data =>
        `/api/users/all?page=${data.page}&pageSize=${data.pageSize}${
          data.keyword ? '&keyword=' + data.keyword : ''
        }`,
    }),
  }),
});

export const {
  useGetTagsQuery,
  useGetFriendsQuery,
  useGetAllDataQuery,
  useGetSearchDataQuery,
} = apiSlice;
