import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {pagesData, tagsData, searchData} from '../../dataType';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: builder => ({
    getTags: builder.query<tagsData[], undefined>({
      query: () => '/api/tags',
    }),
    getFriends: builder.query<pagesData, string>({
      query: pageSize => `/api/friends?page=1&pageSize=${pageSize}`,
    }),
    getAllData: builder.query<pagesData, searchData>({
      query: data =>
        `/api/all?page=1&pageSize=${data.pageSize}${
          data.keyword && '&keyword=' + data.keyword
        }`,
    }),
  }),
});

export const {useGetTagsQuery, useGetFriendsQuery, useGetAllDataQuery} =
  apiSlice;
