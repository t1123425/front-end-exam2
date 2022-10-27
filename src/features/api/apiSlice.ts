import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PagesData, QuerySearchData, TagsData} from '../../dataType';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: builder => ({
    getTags: builder.query<TagsData[], undefined>({
      query: () => '/api/tags',
    }),
    getFriends: builder.query<PagesData, QuerySearchData>({
      query: data =>
        `/api/users/friends?page=${data.page}&pageSize=${data.pageSize}`,
    }),
    getSearchData: builder.query<PagesData, QuerySearchData>({
      query: data =>
        `/api/users/all?page=${data.page}&pageSize=${data.pageSize}${
          data.keyword ? '&keyword=' + data.keyword : ''
        }`,
    }),
    getAllData: builder.query<PagesData, QuerySearchData>({
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
