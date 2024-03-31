import { DataType } from '@/interface/user';
import { pause } from '../utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userDataApi = createApi({
    reducerPath: "user",
    tagTypes: ['user'],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://randomuser.me/api`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("header");
            headers.set("authorization", `Bearer ${token}`)
            return headers;
        },
        fetchFn: async (...args) => {
            await pause(500);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getUserData: builder.query<DataType[], { page: number, results: number }>({
            query: ({ page, results }) => ({
                url: `/`,
                method: "GET",
                params: {
                    page,
                    results
                }
            }),
            providesTags: ['user']
        }),
    })
});

export const {
    useGetUserDataQuery,
} = userDataApi;
export const userDataReducer = userDataApi.reducer;

export default userDataApi;